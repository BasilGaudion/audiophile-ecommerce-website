import { InsightType } from '../../constants';
const getPackageNames = (packages) => {
    const result = new Set();
    Object.values(packages).forEach((metricPackage) => {
        result.add(metricPackage.name);
    });
    return result;
};
const getText = (newPackages) => {
    if (newPackages.length === 1) {
        return `Bundle introduced one new package: ${newPackages[0]}`;
    }
    const firstNewPackages = newPackages.slice(0, 3);
    const otherPackages = newPackages.slice(3);
    const text = `Bundle introduced ${newPackages.length} new packages: ${firstNewPackages.join(', ')}`;
    if (otherPackages.length === 0) {
        return text;
    }
    if (otherPackages.length === 1) {
        return `${text} and one more`;
    }
    return `${text} and ${otherPackages.length} more`;
};
export const extractModulesPackagesNewInsight = (_, currentExtractedData, baselineJob) => {
    var _a, _b, _c;
    const currentMetricPackages = (_a = currentExtractedData === null || currentExtractedData === void 0 ? void 0 : currentExtractedData.metrics) === null || _a === void 0 ? void 0 : _a.packages;
    const baselineMetricPackages = (_c = (_b = baselineJob === null || baselineJob === void 0 ? void 0 : baselineJob.metrics) === null || _b === void 0 ? void 0 : _b.webpack) === null || _c === void 0 ? void 0 : _c.packages;
    if (!baselineMetricPackages) {
        return null;
    }
    const currentPackages = getPackageNames(currentMetricPackages);
    const baselinePackages = getPackageNames(baselineMetricPackages);
    const newPackages = [];
    currentPackages.forEach((packageName) => {
        if (!baselinePackages.has(packageName)) {
            newPackages.push(packageName);
        }
    });
    if (newPackages.length === 0) {
        return null;
    }
    return {
        insights: {
            newPackages: {
                type: InsightType.WARNING,
                data: {
                    text: getText(newPackages),
                    packages: newPackages,
                },
            },
        },
    };
};
//# sourceMappingURL=modules-packages-new-insight.js.map