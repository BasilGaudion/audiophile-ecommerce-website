import get from 'lodash/get';
export const createSummary = (metricPaths, baselineMetricsSource, currentMetricsSource) => {
    const result = {};
    metricPaths.forEach((metric) => {
        result[metric] = {
            baseline: get(baselineMetricsSource, `${metric}.value`, 0),
            current: get(currentMetricsSource, `${metric}.value`, 0),
        };
    });
    return result;
};
//# sourceMappingURL=create-summary.js.map