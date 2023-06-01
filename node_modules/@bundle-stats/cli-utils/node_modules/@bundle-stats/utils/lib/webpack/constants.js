"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACKAGE_PATH_NAME = exports.MODULE_PATH_PACKAGES = exports.SUMMARY_METRIC_PATHS = exports.SECTIONS = exports.SECTION_WEBPACK_PACKAGES = exports.SECTION_WEBPACK_MODULES = exports.SECTION_WEBPACK_ASSETS = exports.SECTION_WEBPACK_SIZES = exports.SECTION_WEBPACK_STATS = void 0;
const types_1 = require("./types");
exports.SECTION_WEBPACK_STATS = 'stats';
exports.SECTION_WEBPACK_SIZES = 'sizes';
exports.SECTION_WEBPACK_ASSETS = 'assets';
exports.SECTION_WEBPACK_MODULES = 'modules';
exports.SECTION_WEBPACK_PACKAGES = 'packages';
exports.SECTIONS = [
    exports.SECTION_WEBPACK_STATS,
    exports.SECTION_WEBPACK_SIZES,
    exports.SECTION_WEBPACK_ASSETS,
    exports.SECTION_WEBPACK_MODULES,
    exports.SECTION_WEBPACK_PACKAGES,
];
exports.SUMMARY_METRIC_PATHS = [
    types_1.Metric.BUNDLE_SIZE,
    types_1.Metric.INITIAL_SIZE_JS,
    types_1.Metric.INITIAL_SIZE_CSS,
    types_1.Metric.CACHE_INVALIDATION,
    types_1.Metric.MODULE_COUNT,
    types_1.Metric.DUPLICATE_MODULES_COUNT,
    types_1.Metric.DUPLICATE_CODE,
    types_1.Metric.CHUNK_COUNT,
    types_1.Metric.ASSET_COUNT,
    types_1.Metric.PACKAGE_COUNT,
    types_1.Metric.DUPLICATE_PACKAGES_COUNT,
];
const PACKAGE_PREFIX = /(?:node_modules|~)(?:\/\.pnpm)?/;
const PACKAGE_SLUG = /[a-zA-Z0-9]+(?:[-|_|.]+[a-zA-Z0-9]+)*/;
const VERSION = /@[\w|\-|_|.]+/;
exports.MODULE_PATH_PACKAGES = new RegExp([
    `(?:${PACKAGE_PREFIX.source}/)`,
    '(?:',
    `(?:@${PACKAGE_SLUG.source}[/|+])?`,
    `(?:${PACKAGE_SLUG.source}\\+)*`,
    `(?:${PACKAGE_SLUG.source})`,
    `(?:${VERSION.source})?`,
    ')',
    '(?:_',
    `(?:@${PACKAGE_SLUG.source}[/|+])?`,
    `(?:${PACKAGE_SLUG.source})`,
    `(?:@${PACKAGE_SLUG.source})?`,
    ')*',
    '/',
].join(''), 'g');
exports.PACKAGE_PATH_NAME = new RegExp([
    `(?:${PACKAGE_PREFIX.source}/)`,
    '(?:',
    '(',
    `(?:@${PACKAGE_SLUG.source}[/|+])?`,
    `(?:(?:${PACKAGE_SLUG.source}\\+)*)`,
    `(?:${PACKAGE_SLUG.source})`,
    ')',
    `(?:${VERSION.source})?`,
    ')',
    '(?:_',
    '(',
    `(?:@${PACKAGE_SLUG.source}[/|+])?`,
    `(?:${PACKAGE_SLUG.source})`,
    ')',
    `(?:@${PACKAGE_SLUG.source})`,
    ')*',
    '/',
].join(''), 'g');
//# sourceMappingURL=constants.js.map