import { Job, JobInsights } from '../../constants';
interface ModulesPackagesNewData {
    insights?: {
        newPackages: JobInsights['webpack']['newPackages'];
    };
}
export declare const extractModulesPackagesNewInsight: (_: any, currentExtractedData: any, baselineJob?: Job) => ModulesPackagesNewData | null;
export {};
