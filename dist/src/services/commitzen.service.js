"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const npmAddScript = require("npm-add-script");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
class CommitzenService {
    getDescription() {
        return 'add commitzen and default configuration to support standard commit messages using npm run commit';
    }
    async config() {
        try {
            console.info('Installing commitizen');
            await exec('npm i --save-dev commitizen');
            console.info('Configuring commitizen init');
            await exec('commitizen init cz-conventional-changelog --save-dev --save-exact --force');
            console.info('Adding commit script to be used over git commit');
            npmAddScript({ key: 'commit', value: 'cz', force: true });
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = new CommitzenService();
//# sourceMappingURL=commitzen.service.js.map