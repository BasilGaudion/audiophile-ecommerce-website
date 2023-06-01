"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJobs = void 0;
const create_job_1 = require("./create-job");
const createJobs = (sources) => {
    const jobs = [];
    for (let i = sources.length - 1; i >= 0; i -= 1) {
        const source = sources[i];
        const baseline = jobs.length > 0 ? jobs[jobs.length - 1] : undefined;
        const jobData = (0, create_job_1.createJob)(source, baseline);
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
exports.createJobs = createJobs;
//# sourceMappingURL=create-jobs.js.map