import round from 'lodash/round';
import union from 'lodash/union';
import { getModuleName, normalizeChunkId } from '../utils';
export const extractModules = (webpackStats) => {
    const modulesSource = webpackStats === null || webpackStats === void 0 ? void 0 : webpackStats.modules;
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
                const concatenatedModuleName = getModuleName(concatenatedModule.name);
                const existingModule = modulesByName.get(concatenatedModuleName);
                if (existingModule) {
                    modulesByName.set(concatenatedModuleName, {
                        ...existingModule,
                        chunks: union(existingModule.chunks, rootModule.chunks),
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
        const normalizedName = getModuleName(rootModule.name);
        const savedRootModule = modulesByName.get(normalizedName);
        if (savedRootModule) {
            modulesByName.set(normalizedName, {
                ...savedRootModule,
                chunks: union(savedRootModule.chunks, rootModule.chunks),
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
            chunkIds: chunks.map(normalizeChunkId),
            ...(duplicated && { duplicated }),
        };
    }, {});
    const duplicateCode = totalCodeSize ? round((duplicateCodeSize / totalCodeSize) * 100, 2) : 0;
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
//# sourceMappingURL=modules.js.map