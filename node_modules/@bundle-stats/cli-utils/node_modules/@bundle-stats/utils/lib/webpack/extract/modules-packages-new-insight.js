"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractModulesPackagesNewInsight = void 0;
const constants_1 = require("../../constants");
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
const extractModulesPackagesNewInsight = (_, currentExtractedData, baselineJob) => {
    const currentMetricPackages = currentExtractedData?.metrics?.packages;
    const baselineMetricPackages = baselineJob?.metrics?.webpack?.packages;
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
                type: constants_1.InsightType.WARNING,
                data: {
                    text: getText(newPackages),
                    packages: newPackages,
                },
            },
        },
    };
};
exports.extractModulesPackagesNewInsight = extractModulesPackagesNewInsight;
//# sourceMappingURL=modules-packages-new-insight.js.map