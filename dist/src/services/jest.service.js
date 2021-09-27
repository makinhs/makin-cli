"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const fs_1 = require("fs");
const npmAddScript = require("npm-add-script");
const child_process = require("child_process");
const jest_config_1 = require("./scripts/jest.config");
const exec = util.promisify(child_process.exec);
class JestService {
    getDescription() {
        return 'add jest to package.json, with a test script that runs jest';
    }
    async config() {
        console.info('Configuring jest...');
        try {
            console.info('Installing jest and required Typescript dependencies ');
            await exec('npm i --save-dev jest @types/jest ts-jest');
            console.info('Configuring jest.config.ts');
            await (0, fs_1.writeFileSync)('jest.config.ts', jest_config_1.jestConfig);
            console.info('Adding jest script to package.json');
            npmAddScript({ key: 'test', value: 'jest', force: true });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = new JestService();
//# sourceMappingURL=jest.service.js.map