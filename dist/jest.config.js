"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'clearMocks': true,
    'collectCoverage': true,
    'coverageProvider': 'v8',
    'rootDir': 'src',
    'testRegex': '.*\\.spec\\.ts$',
    'transform': {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    'collectCoverageFrom': [
        '**/*.(t|j)s',
    ],
    'coverageDirectory': '../coverage',
    'testEnvironment': 'node',
    'moduleFileExtensions': [
        'js',
        'json',
        'ts',
    ],
    'testTimeout': 30000,
};
//# sourceMappingURL=jest.config.js.map