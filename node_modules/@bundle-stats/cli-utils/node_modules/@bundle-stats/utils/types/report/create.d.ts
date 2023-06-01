import { MetricRunInfo, Job } from '../constants';
interface ReportMetricRunInfo extends MetricRunInfo {
    label: string;
}
type ReportSummary = Record<string, Array<ReportMetricRunInfo>>;
interface JobRun {
    internalBuildNumber: number;
}
interface Report {
    createdAt: string;
    version: string;
    summary: ReportSummary;
    runs: Array<JobRun>;
}
export declare const createReport: (jobs: Array<Job>) => Report;
export {};
