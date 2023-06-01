"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAssetsSizeTotalInsight = void 0;
const constants_1 = require("../../constants");
const metrics_1 = require("../../utils/metrics");
const utils_1 = require("../utils");
const types_1 = require("../types");
const getText = ({ metric, displayValue, displayDeltaPercentage }) => `${metric} — ${displayValue} (${displayDeltaPercentage}).`;
const extractAssetsSizeTotalInsight = (_, currentExtractedData, baselineBundleStats) => {
    const currentValue = currentExtractedData?.metrics?.[types_1.Metric.BUNDLE_SIZE]?.value || 0;
    const baselineValue = baselineBundleStats?.metrics?.webpack?.[types_1.Metric.BUNDLE_SIZE]?.value || 0;
    const metric = (0, utils_1.getMetricType)(types_1.Metric.BUNDLE_SIZE);
    const info = (0, metrics_1.getMetricRunInfo)(metric, currentValue, baselineValue);
    const { displayDeltaPercentage, displayValue } = info;
    return {
        insights: {
            assetsSizeTotal: {
                type: constants_1.InsightType.INFO,
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
exports.extractAssetsSizeTotalInsight = extractAssetsSizeTotalInsight;
//# sourceMappingURL=assets-size-total-insight.js.map