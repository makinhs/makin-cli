"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsconfig = void 0;
exports.tsconfig = `{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2020",
    "lib": ["ES2020"],
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true
  }
}
`;
//# sourceMappingURL=tsconfig.script.js.map