"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettierrc_script_1 = require("./scripts/prettierrc.script");
const util = require("util");
const fs_1 = require("fs");
const npmAddScript = require("npm-add-script");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
class PrettierService {
    getDescription() {
        return 'add prettier to package.json, with a format script and a generic configuration file (.prettierrc)';
    }
    async config() {
        console.info('Configuring prettier...');
        try {
            console.info('Installing prettier');
            await exec('npm i --save-dev prettier');
            console.info('Adding .prettierrc');
            await (0, fs_1.writeFileSync)('.prettierrc', prettierrc_script_1.prettier);
            console.info('Adding format script to package.json');
            npmAddScript({ key: 'format', value: 'prettier --write "src/**/*.ts"', force: true });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = new PrettierService();
//# sourceMappingURL=prettier.service.js.map