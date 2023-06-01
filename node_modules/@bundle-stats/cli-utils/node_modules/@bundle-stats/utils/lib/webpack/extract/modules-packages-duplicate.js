"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractModulesPackagesDuplicate = exports.getDuplicatePackagesInsight = void 0;
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const map_1 = __importDefault(require("lodash/map"));
const orderBy_1 = __importDefault(require("lodash/orderBy"));
const sum_1 = __importDefault(require("lodash/sum"));
const constants_1 = require("../../constants");
const getDuplicatePackagesInsight = (duplicatePackagesMap, baselineDuplicatePackagesMap) => {
    const duplicateInstances = [];
    const baselineDuplicateInstances = [];
    const newDuplicateInstances = [];
    const removedDuplicateInstances = [];
    Object.entries(duplicatePackagesMap).forEach(([id, instances]) => {
        instances.forEach((duplicateInstance) => {
            if (duplicateInstance === id) {
                return;
            }
            duplicateInstances.push(duplicateInstance);
            if (baselineDuplicatePackagesMap?.[id]?.includes(duplicateInstance)) {
                return;
            }
            newDuplicateInstances.push(duplicateInstance);
        });
    });
    if (baselineDuplicatePackagesMap) {
        Object.entries(baselineDuplicatePackagesMap).forEach(([id, instances]) => {
            instances.forEach((duplicateInstance) => {
                if (duplicateInstance === id) {
                    return;
                }
                baselineDuplicateInstances.push(duplicateInstance);
                if (duplicatePackagesMap?.[id]?.includes(duplicateInstance)) {
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
        insightType = constants_1.InsightType.ERROR;
    }
    else if (newDuplicateInstancesCount > 0 && !(0, isEmpty_1.default)(baselineDuplicatePackagesMap)) {
        const item = newDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle introduced ${newDuplicateInstancesCount} duplicate ${item}`;
        insightType = constants_1.InsightType.ERROR;
    }
    else if (newDuplicateInstancesCount > 0) {
        const item = newDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle contains ${newDuplicateInstancesCount} duplicate ${item}`;
        insightType = constants_1.InsightType.WARNING;
    }
    else if (removedDuplicateInstancesCount > 0 && duplicateInstancesCount > 0) {
        const itemRemoved = removedDuplicateInstancesCount > 1 ? 'packages' : 'package';
        const itemRemaining = duplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle removed ${removedDuplicateInstancesCount} duplicate ${itemRemoved}, ${duplicateInstancesCount} duplicate ${itemRemaining} remaining`;
        insightType = constants_1.InsightType.WARNING;
    }
    else if (removedDuplicateInstancesCount > 0) {
        const item = removedDuplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle removed ${removedDuplicateInstancesCount} duplicate ${item}`;
        insightType = constants_1.InsightType.INFO;
    }
    else if (newDuplicateInstancesCount === 0 &&
        removedDuplicateInstancesCount === 0 &&
        duplicateInstancesCount > 0) {
        const item = duplicateInstancesCount > 1 ? 'packages' : 'package';
        text = `Bundle contains ${duplicateInstancesCount} duplicate ${item}`;
        insightType = constants_1.InsightType.WARNING;
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
exports.getDuplicatePackagesInsight = getDuplicatePackagesInsight;
const extractModulesPackagesDuplicate = (_, currentExtractedData, baselineJob) => {
    const source = currentExtractedData?.metrics?.packages || {};
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
            value: (0, sum_1.default)((0, map_1.default)(packageGroupData.children, 'value')),
            children: packageGroupData.children,
        });
    });
    const baselineDuplicatePackages = baselineJob?.insights?.webpack?.duplicatePackagesV3?.data?.packages ||
        baselineJob?.insights?.webpack?.duplicatePackages?.data ||
        {};
    const noDuplicatesDuplicatePackagesV3 = (0, exports.getDuplicatePackagesInsight)({}, baselineDuplicatePackages);
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
    const duplicatePackagesByName = (0, orderBy_1.default)(duplicatePackages, 'value', 'desc').reduce((agg, { name, ...duplicatePackageData }) => ({
        ...agg,
        [name]: {
            ...duplicatePackageData,
            children: (0, orderBy_1.default)(duplicatePackageData.children, 'value', 'desc'),
        },
    }), {});
    const duplicatePackagesData = {};
    Object.entries(duplicatePackagesByName).forEach(([packageName, packageData]) => {
        if (!duplicatePackagesData[packageName]) {
            duplicatePackagesData[packageName] = [];
        }
        duplicatePackagesData[packageName] = packageData.children.map(({ id }) => id);
    });
    const duplicatePackagesV3 = (0, exports.getDuplicatePackagesInsight)(duplicatePackagesData, baselineDuplicatePackages);
    return {
        insights: {
            duplicatePackages: {
                type: constants_1.InsightType.WARNING,
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
exports.extractModulesPackagesDuplicate = extractModulesPackagesDuplicate;
//# sourceMappingURL=modules-packages-duplicate.js.map