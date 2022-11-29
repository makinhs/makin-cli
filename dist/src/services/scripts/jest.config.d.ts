export declare const jestConfig = "/*\n * For a detailed explanation regarding each configuration property and type check, visit:\n * https://jestjs.io/docs/configuration\n */\n\nexport default {\n  'clearMocks': true,\n  'collectCoverage': true,\n  'coverageProvider': 'v8',\n  'rootDir': 'src',\n  'testRegex': '.*.spec.ts$',\n  'transform': {\n    '^.+.(t|j)s$': 'ts-jest',\n  },\n  'collectCoverageFrom': [\n    '**/*.(t|j)s',\n  ],\n  'coverageDirectory': '../coverage',\n  'testEnvironment': 'node',\n  'moduleFileExtensions': [\n    'js',\n    'json',\n    'ts',\n  ],\n  'testTimeout': 30000,\n  \"coveragePathIgnorePatterns\": [\n    \"src/index.ts\",\n  ],\n};\n";
