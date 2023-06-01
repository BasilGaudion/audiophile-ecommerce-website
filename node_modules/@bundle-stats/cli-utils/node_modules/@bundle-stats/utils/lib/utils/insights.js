"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChangedInsights = exports.getInsightList = void 0;
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const constants_1 = require("../constants");
const component_links_1 = require("./component-links");
const getInsightList = (insights) => {
    const { duplicatePackages, newPackages } = insights;
    const insightsByLevel = {
        [constants_1.InsightType.ERROR]: [],
        [constants_1.InsightType.WARNING]: [],
        [constants_1.InsightType.INFO]: [],
    };
    if (duplicatePackages) {
        insightsByLevel[duplicatePackages.type].push({
            name: 'duplicatePackages',
            insight: duplicatePackages,
            link: duplicatePackages.type === constants_1.InsightType.WARNING
                ? component_links_1.BUNDLE_PACKAGES_DUPLICATE
                : component_links_1.BUNDLE_PACKAGES_DUPLICATE_CHANGED,
        });
    }
    if (newPackages) {
        insightsByLevel[newPackages.type].push({
            name: 'newPackages',
            insight: newPackages,
            link: component_links_1.BUNDLE_PACKAGES_CHANGED,
        });
    }
    return [
        ...(insightsByLevel[constants_1.InsightType.ERROR] || []),
        ...(insightsByLevel[constants_1.InsightType.WARNING] || []),
        ...(insightsByLevel[constants_1.InsightType.INFO] || []),
    ];
};
exports.getInsightList = getInsightList;
const getChangedInsights = (normalizedInsights) => {
    const res = {};
    if (normalizedInsights.duplicatePackages?.type === constants_1.InsightType.ERROR) {
        res.duplicatePackages = normalizedInsights.duplicatePackages;
    }
    if (normalizedInsights.newPackages) {
        res.newPackages = normalizedInsights.newPackages;
    }
    if ((0, isEmpty_1.default)(res)) {
        return null;
    }
    return res;
};
exports.getChangedInsights = getChangedInsights;
//# sourceMappingURL=insights.js.map