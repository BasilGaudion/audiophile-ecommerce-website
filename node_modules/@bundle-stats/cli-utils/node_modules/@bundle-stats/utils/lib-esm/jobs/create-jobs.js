import { createJob } from './create-job';
export const createJobs = (sources) => {
    const jobs = [];
    for (let i = sources.length - 1; i >= 0; i -= 1) {
        const source = sources[i];
        const baseline = jobs.length > 0 ? jobs[jobs.length - 1] : undefined;
        const jobData = createJob(source, baseline);
        const internalBuildNumber = sources.length - i;
        const label = `Job #${internalBuildNumber}`;
        const job = {
            ...jobData,
            internalBuildNumber,
            label,
        };
        jobs.unshift(job);
    }
    return jobs;
};
//# sourceMappingURL=create-jobs.js.map