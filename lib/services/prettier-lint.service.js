"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettierrc_script_1 = require("./scripts/prettierrc.script");
const eslintrc_script_1 = require("./scripts/eslintrc.script");
const util = require("util");
const fs_1 = require("fs");
const npmAddScript = require("npm-add-script");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
class PrettierLintService {
    getPrettierDescription() {
        return 'add prettier to package.json, with a format script and a generic configuration file (.prettierrc)';
    }
    getLintDescription() {
        return 'add eslint to package.json, with a lint script and a generic configuration file (.eslintrc.js)';
    }
    async configPrettier() {
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
    async configLint() {
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
exports.default = new PrettierLintService();
//# sourceMappingURL=prettier-lint.service.js.map