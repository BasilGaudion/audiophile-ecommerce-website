import { Job, JobInsight, JobInsightDuplicatePackagesV3Data, JobInsights, MetricRun } from '../../constants';
interface ModulesPackagesDuplicateData {
    insights?: {
        duplicatePackages?: JobInsights['webpack']['duplicatePackages'];
        duplicatePackagesV3?: JobInsights['webpack']['duplicatePackagesV3'];
    };
    metrics: {
        duplicatePackagesCount: MetricRun;
    };
}
export declare const getDuplicatePackagesInsight: (duplicatePackagesMap: Record<string, Array<string>>, baselineDuplicatePackagesMap?: Record<string, Array<string>>) => JobInsight<JobInsightDuplicatePackagesV3Data> | null;
export declare const extractModulesPackagesDuplicate: (_: any, currentExtractedData: any, baselineJob?: Job) => ModulesPackagesDuplicateData;
export {};
