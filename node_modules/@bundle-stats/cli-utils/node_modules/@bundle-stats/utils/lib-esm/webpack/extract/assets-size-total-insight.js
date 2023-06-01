import { InsightType } from '../../constants';
import { getMetricRunInfo } from '../../utils/metrics';
import { getMetricType } from '../utils';
import { Metric } from '../types';
const getText = ({ metric, displayValue, displayDeltaPercentage }) => `${metric} — ${displayValue} (${displayDeltaPercentage}).`;
export const extractAssetsSizeTotalInsight = (_, currentExtractedData, baselineBundleStats) => {
    var _a, _b, _c, _d, _e;
    const currentValue = ((_b = (_a = currentExtractedData === null || currentExtractedData === void 0 ? void 0 : currentExtractedData.metrics) === null || _a === void 0 ? void 0 : _a[Metric.BUNDLE_SIZE]) === null || _b === void 0 ? void 0 : _b.value) || 0;
    const baselineValue = ((_e = (_d = (_c = baselineBundleStats === null || baselineBundleStats === void 0 ? void 0 : baselineBundleStats.metrics) === null || _c === void 0 ? void 0 : _c.webpack) === null || _d === void 0 ? void 0 : _d[Metric.BUNDLE_SIZE]) === null || _e === void 0 ? void 0 : _e.value) || 0;
    const metric = getMetricType(Metric.BUNDLE_SIZE);
    const info = getMetricRunInfo(metric, currentValue, baselineValue);
    const { displayDeltaPercentage, displayValue } = info;
    return {
        insights: {
            assetsSizeTotal: {
                type: InsightType.INFO,
                data: {
                    text: getText({ metric: metric.label, displayValue, displayDeltaPercentage }),
                    md: getText({
                        metric: `*${metric.label}*`,
                        displayValue: `*${displayValue}*`,
                        displayDeltaPercentage: `*${displayDeltaPercentage}*`,
                    }),
                    info,
                },
            },
        },
    };
};
//# sourceMappingURL=assets-size-total-insight.js.map