"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsconfig_script_1 = require("./scripts/tsconfig.script");
const util = require("util");
const fs_1 = require("fs");
const npmAddScript = require("npm-add-script");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
class TypescriptService {
    getLintDescription() {
        return 'add typescript related packages to package.json, and a generic configuration file (.tsconfig.json), using src/index.ts as the main entrance of your app. Change it in package.json after the build if yours is different';
    }
    async config() {
        console.info('Configuring typescript...');
        try {
            console.info('Installing typescript @types/node ts-node');
            await exec('npm i --save-dev typescript @types/node ts-node');
            console.info('Adding tsconfig.json');
            await (0, fs_1.writeFileSync)('tsconfig.json', tsconfig_script_1.tsconfig);
            console.info('Adding build and start scripts to package.json');
            npmAddScript({ key: 'build', value: 'tsc -p .', force: true });
            npmAddScript({ key: 'start', value: 'ts-node src/index.ts', force: true });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = new TypescriptService();
//# sourceMappingURL=typescript.service.js.map