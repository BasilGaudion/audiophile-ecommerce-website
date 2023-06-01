import isEmpty from 'lodash/isEmpty';
import { InsightType } from '../constants';
import { BUNDLE_PACKAGES_DUPLICATE, BUNDLE_PACKAGES_CHANGED, BUNDLE_PACKAGES_DUPLICATE_CHANGED, } from './component-links';
export const getInsightList = (insights) => {
    const { duplicatePackages, newPackages } = insights;
    const insightsByLevel = {
        [InsightType.ERROR]: [],
        [InsightType.WARNING]: [],
        [InsightType.INFO]: [],
    };
    if (duplicatePackages) {
        insightsByLevel[duplicatePackages.type].push({
            name: 'duplicatePackages',
            insight: duplicatePackages,
            link: duplicatePackages.type === InsightType.WARNING
                ? BUNDLE_PACKAGES_DUPLICATE
                : BUNDLE_PACKAGES_DUPLICATE_CHANGED,
        });
    }
    if (newPackages) {
        insightsByLevel[newPackages.type].push({
            name: 'newPackages',
            insight: newPackages,
            link: BUNDLE_PACKAGES_CHANGED,
        });
    }
    return [
        ...(insightsByLevel[InsightType.ERROR] || []),
        ...(insightsByLevel[InsightType.WARNING] || []),
        ...(insightsByLevel[InsightType.INFO] || []),
    ];
};
export const getChangedInsights = (normalizedInsights) => {
    var _a;
    const res = {};
    if (((_a = normalizedInsights.duplicatePackages) === null || _a === void 0 ? void 0 : _a.type) === InsightType.ERROR) {
        res.duplicatePackages = normalizedInsights.duplicatePackages;
    }
    if (normalizedInsights.newPackages) {
        res.newPackages = normalizedInsights.newPackages;
    }
    if (isEmpty(res)) {
        return null;
    }
    return res;
};
//# sourceMappingURL=insights.js.map