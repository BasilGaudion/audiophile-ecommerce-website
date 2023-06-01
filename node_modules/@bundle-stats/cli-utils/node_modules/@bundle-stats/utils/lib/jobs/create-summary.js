"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSummary = void 0;
const get_1 = __importDefault(require("lodash/get"));
const createSummary = (metricPaths, baselineMetricsSource, currentMetricsSource) => {
    const result = {};
    metricPaths.forEach((metric) => {
        result[metric] = {
            baseline: (0, get_1.default)(baselineMetricsSource, `${metric}.value`, 0),
            current: (0, get_1.default)(currentMetricsSource, `${metric}.value`, 0),
        };
    });
    return result;
};
exports.createSummary = createSummary;
//# sourceMappingURL=create-summary.js.map