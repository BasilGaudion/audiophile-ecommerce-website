"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractModules = void 0;
const round_1 = __importDefault(require("lodash/round"));
const union_1 = __importDefault(require("lodash/union"));
const utils_1 = require("../utils");
const extractModules = (webpackStats) => {
    const modulesSource = webpackStats?.modules;
    if (!modulesSource) {
        return {
            metrics: {
                duplicateCode: { value: 0 },
                duplicateModulesCount: { value: 0 },
                modules: {},
                moduleCount: { value: 0 },
            },
        };
    }
    const modulesByName = new Map();
    modulesSource.forEach((rootModule) => {
        if (!rootModule.chunks || rootModule.chunks.length === 0) {
            return;
        }
        if (rootModule.modules) {
            rootModule.modules.forEach((concatenatedModule) => {
                const concatenatedModuleName = (0, utils_1.getModuleName)(concatenatedModule.name);
                const existingModule = modulesByName.get(concatenatedModuleName);
                if (existingModule) {
                    modulesByName.set(concatenatedModuleName, {
                        ...existingModule,
                        chunks: (0, union_1.default)(existingModule.chunks, rootModule.chunks),
                    });
                }
                else {
                    modulesByName.set(concatenatedModuleName, {
                        ...concatenatedModule,
                        chunks: rootModule.chunks,
                    });
                }
            });
            return;
        }
        const normalizedName = (0, utils_1.getModuleName)(rootModule.name);
        const savedRootModule = modulesByName.get(normalizedName);
        if (savedRootModule) {
            modulesByName.set(normalizedName, {
                ...savedRootModule,
                chunks: (0, union_1.default)(savedRootModule.chunks, rootModule.chunks),
                size: rootModule.size,
            });
            return;
        }
        modulesByName.set(normalizedName, rootModule);
    });
    const modules = {};
    let moduleCount = 0;
    let totalCodeSize = 0;
    let duplicateCodeSize = 0;
    let duplicateModulesCount = 0;
    modulesByName.forEach((moduleEntry, normalizedName) => {
        const { name, size = 0, chunks } = moduleEntry;
        const instances = chunks.length;
        const duplicateInstances = instances - 1;
        const duplicated = duplicateInstances > 0;
        moduleCount += instances;
        totalCodeSize += instances * size;
        if (duplicated) {
            duplicateModulesCount += duplicateInstances;
            duplicateCodeSize += duplicateInstances * size;
        }
        modules[normalizedName] = {
            name,
            value: size,
            chunkIds: chunks.map(utils_1.normalizeChunkId),
            ...(duplicated && { duplicated }),
        };
    }, {});
    const duplicateCode = totalCodeSize ? (0, round_1.default)((duplicateCodeSize / totalCodeSize) * 100, 2) : 0;
    return {
        metrics: {
            modules,
            duplicateCode: {
                value: duplicateCode,
            },
            duplicateModulesCount: {
                value: duplicateModulesCount,
            },
            moduleCount: {
                value: moduleCount,
            },
        },
    };
};
exports.extractModules = extractModules;
//# sourceMappingURL=modules.js.map