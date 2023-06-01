import isEmpty from 'lodash/isEmpty';
import { Source } from '../constants';
import { getGlobalMetricType, getMetricRunInfo } from '../utils/metrics';
import * as webpack from '../webpack';
import { version } from '../../package.json';
export const createReport = (jobs) => {
    var _a;
    const insights = (_a = jobs[0]) === null || _a === void 0 ? void 0 : _a.insights;
    const summary = {};
    Object.values(Source).forEach((sourceId) => {
        var _a, _b;
        const sourceSummary = (_b = (_a = jobs[0]) === null || _a === void 0 ? void 0 : _a.summary) === null || _b === void 0 ? void 0 : _b[sourceId];
        if (!sourceSummary) {
            return;
        }
        const summaryEntries = Object.entries(sourceSummary).map(([metricId, summaryData]) => {
            const metric = getGlobalMetricType(`${sourceId}.${metricId}`);
            const { current = 0, baseline = 0 } = summaryData;
            const data = getMetricRunInfo(metric, current, baseline);
            return Object.assign(data, { label: metric.label });
        });
        summary[sourceId] = summaryEntries;
    }, {});
    const sectionsData = webpack.compare(jobs);
    return Object.assign(sectionsData, {
        createdAt: new Date().toISOString(),
        version,
        runs: jobs.map(({ internalBuildNumber, meta }) => ({
            ...meta,
            internalBuildNumber,
        })),
        summary,
        ...(!isEmpty(insights) ? { insights } : {}),
    });
};
//# sourceMappingURL=create.js.map