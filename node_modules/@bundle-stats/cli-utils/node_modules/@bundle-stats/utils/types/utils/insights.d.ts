import { JobInsight, JobInsightsInfo } from '../constants';
interface InsightListItem {
    name: string;
    insight: JobInsight;
    link: any;
}
export declare const getInsightList: (insights: JobInsightsInfo) => Array<InsightListItem>;
export declare const getChangedInsights: (normalizedInsights: JobInsightsInfo) => JobInsightsInfo | null;
export {};
