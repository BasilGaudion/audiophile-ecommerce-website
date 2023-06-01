import merge from 'lodash/merge';
import { createSummary } from './create-summary';
import * as webpack from '../webpack';
import * as lighthouse from '../lighthouse';
import * as browsertime from '../browsertime';
import { Source } from '../constants';
const SOURCE_MODULES = { webpack, lighthouse, browsertime };
export const createJob = (source, baseline) => Object.values(Source).reduce((agg, sourcePath) => {
    var _a;
    const rawData = source[sourcePath];
    if (!rawData) {
        return agg;
    }
    const sourceModule = SOURCE_MODULES[sourcePath];
    if (!sourceModule) {
        return agg;
    }
    const extractedData = sourceModule.extract(rawData, baseline);
    const summary = createSummary(SOURCE_MODULES[sourcePath].SUMMARY_METRIC_PATHS, (_a = baseline === null || baseline === void 0 ? void 0 : baseline.metrics) === null || _a === void 0 ? void 0 : _a[sourcePath], extractedData === null || extractedData === void 0 ? void 0 : extractedData.metrics);
    return merge({}, agg, {
        meta: {
            [sourcePath]: extractedData.meta,
        },
        insights: {
            [sourcePath]: extractedData.insights,
        },
        summary: {
            [sourcePath]: summary,
        },
        metrics: {
            [sourcePath]: extractedData.metrics,
        },
        rawData: {
            [sourcePath]: rawData,
        },
    });
}, {});
//# sourceMappingURL=create-job.js.map