"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslintrc_script_1 = require("./scripts/eslintrc.script");
const util = require("util");
const fs_1 = require("fs");
const npmAddScript = require("npm-add-script");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
class LintService {
    getDescription() {
        return 'add lint to package.json, with a format script and a generic configuration file (.eslintrc.js)';
    }
    async config() {
        console.info('Configuring lint...');
        try {
            console.info('Installing eslint');
            await exec('npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser');
            console.info('Configuring .eslintrc');
            await (0, fs_1.writeFileSync)('.eslintrc.js', eslintrc_script_1.eslintrc);
            console.info('Adding lint script to package.json');
            npmAddScript({ key: 'lint', value: 'eslint "{src,apps,libs,test}/**/*.ts" --fix', force: true });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = new LintService();
//# sourceMappingURL=lint.service.js.map