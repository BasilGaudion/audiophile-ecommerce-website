import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import sum from 'lodash/sum';
import { InsightType, } from '../../constants';
export const getDuplicatePackagesInsight = (duplicatePackagesMap, baselineDuplicatePackagesMap) => {
    const duplicateInstances = [];
    const baselineDuplicateInstances = [];
    const newDuplicateInstances = [];
    const removedDuplicateInstances = [];
    Object.entries(duplicatePackagesMap).forEach(([id, instances]) => {
        instances.forEach((duplicateInstance) => {
            var _a;
            if (duplicateInstance === id) {
                return;
            }
            duplicateInstances.push(duplicateInstance);
            if ((_a = baselineDuplicatePackagesMap === null || baselineDuplicatePackagesMap === void 0 ? void 0 : baselineDuplicatePackagesMap[id]) === null || _a === void 0 ? void 0 : _a.includes(duplicateInstance)) {
                return;
            }
            newDuplicateInstances.push(duplicateInstance);
        });
    });
    if (baselineDuplicatePackagesMap) {
        Object.entries(baselineDuplicatePackagesMap).forEach(([id, instances]) => {
            instances.forEach((duplicateInstance) => {
                var _a;
                if (duplicateInstance === id) {
                    return;
                }
                baselineDuplicateInstances.push(duplicateInstance);
                if ((_a = duplicatePackagesMap === null || duplicatePackagesMap === void 0 ? void 0 : duplicatePackagesMap[id]) === null || _a === void 0 ? void 0 : _a.includes(duplicateInstance)) {
                    return;
                }
                removedDuplicateInstances.push(duplicateInstance);
            });
        });
    }
    const duplicateInstancesCount = duplicateInstances.length;
    const newDuplicateInstancesCount = newDuplicateInstances.length;
    const removedDuplicateInstancesCount = removedDuplicateInstances.length;
    let text = '';
    let insightType = null;
    if (newDuplicateInstancesCount > 0 && removedDuplicateInstancesCount > 0) {
        const item = newDuplicateInstancesCount > 1 || removedDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle introduced ${newDuplicateInstancesCount} and removed ${removedDuplicateInstancesCount} duplicate ${item}`;
        insightType = InsightType.ERROR;
    }
    else if (newDuplicateInstancesCount > 0 && !isEmpty(baselineDuplicatePackagesMap)) {
        const item = newDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle introduced ${newDuplicateInstancesCount} duplicate ${item}`;
        insightType = InsightType.ERROR;
    }
    else if (newDuplicateInstancesCount > 0) {
        const item = newDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle contains ${newDuplicateInstancesCount} duplicate ${item}`;
        insightType = InsightType.WARNING;
    }
    else if (removedDuplicateInstancesCount > 0 && duplicateInstancesCount > 0) {
        const itemRemoved = removedDuplicateInstancesCount > 1 ? 'packages' : 'package';
        const itemRemaining = duplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle removed ${removedDuplicateInstancesCount} duplicate ${itemRemoved}, ${duplicateInstancesCount} duplicate ${itemRemaining} remaining`;
        insightType = InsightType.WARNING;
    }
    else if (removedDuplicateInstancesCount > 0) {
        const item = removedDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle removed ${removedDuplicateInstancesCount} duplicate ${item}`;
        insightType = InsightType.INFO;
    }
    else if (newDuplicateInstancesCount === 0 &&
        removedDuplicateInstancesCount === 0 &&
        duplicateInstancesCount > 0) {
        const item = duplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle contains ${duplicateInstancesCount} duplicate ${item}`;
        insightType = InsightType.WARNING;
    }
    else {
    }
    if (!text || !insightType) {
        return null;
    }
    return {
        type: insightType,
        data: {
            text,
            packages: duplicatePackagesMap,
        },
    };
};
export const extractModulesPackagesDuplicate = (_, currentExtractedData, baselineJob) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const source = ((_a = currentExtractedData === null || currentExtractedData === void 0 ? void 0 : currentExtractedData.metrics) === null || _a === void 0 ? void 0 : _a.packages) || {};
    const packagesByName = {};
    Object.entries(source).forEach(([packageId, packageData]) => {
        const { name, value } = packageData;
        const existingPackageData = packagesByName[name] || {
            name,
            value,
            children: [],
        };
        existingPackageData.children.push({ id: packageId, value });
        packagesByName[name] = existingPackageData;
    });
    let count = 0;
    const duplicatePackages = [];
    Object.entries(packagesByName).forEach(([packageGroupName, packageGroupData]) => {
        const duplicateInstances = packageGroupData.children.length - 1;
        if (duplicateInstances === 0) {
            return;
        }
        count += duplicateInstances;
        duplicatePackages.push({
            name: packageGroupName,
            value: sum(map(packageGroupData.children, 'value')),
            children: packageGroupData.children,
        });
    });
    const baselineDuplicatePackages = ((_e = (_d = (_c = (_b = baselineJob === null || baselineJob === void 0 ? void 0 : baselineJob.insights) === null || _b === void 0 ? void 0 : _b.webpack) === null || _c === void 0 ? void 0 : _c.duplicatePackagesV3) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.packages) ||
        ((_h = (_g = (_f = baselineJob === null || baselineJob === void 0 ? void 0 : baselineJob.insights) === null || _f === void 0 ? void 0 : _f.webpack) === null || _g === void 0 ? void 0 : _g.duplicatePackages) === null || _h === void 0 ? void 0 : _h.data) ||
        {};
    const noDuplicatesDuplicatePackagesV3 = getDuplicatePackagesInsight({}, baselineDuplicatePackages);
    if (!count) {
        return {
            ...(noDuplicatesDuplicatePackagesV3 && {
                insights: {
                    duplicatePackagesV3: noDuplicatesDuplicatePackagesV3,
                },
            }),
            metrics: {
                duplicatePackagesCount: {
                    value: count,
                },
            },
        };
    }
    const duplicatePackagesByName = orderBy(duplicatePackages, 'value', 'desc').reduce((agg, { name, ...duplicatePackageData }) => ({
        ...agg,
        [name]: {
            ...duplicatePackageData,
            children: orderBy(duplicatePackageData.children, 'value', 'desc'),
        },
    }), {});
    const duplicatePackagesData = {};
    Object.entries(duplicatePackagesByName).forEach(([packageName, packageData]) => {
        if (!duplicatePackagesData[packageName]) {
            duplicatePackagesData[packageName] = [];
        }
        duplicatePackagesData[packageName] = packageData.children.map(({ id }) => id);
    });
    const duplicatePackagesV3 = getDuplicatePackagesInsight(duplicatePackagesData, baselineDuplicatePackages);
    return {
        insights: {
            duplicatePackages: {
                type: InsightType.WARNING,
                data: duplicatePackagesData,
            },
            ...(duplicatePackagesV3 && { duplicatePackagesV3 }),
        },
        metrics: {
            duplicatePackagesCount: {
                value: count,
            },
        },
    };
};
//# sourceMappingURL=modules-packages-duplicate.js.map