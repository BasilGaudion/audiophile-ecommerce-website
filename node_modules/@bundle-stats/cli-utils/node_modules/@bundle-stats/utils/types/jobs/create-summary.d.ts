import { JobMetricsSource, JobSummaryItem } from '../constants';
type JobSummary = Record<string, JobSummaryItem>;
export declare const createSummary: (metricPaths: Array<string>, baselineMetricsSource: JobMetricsSource | null | undefined, currentMetricsSource: JobMetricsSource) => JobSummary;
export {};
