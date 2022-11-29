"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec);
class ChanceService {
    getDescription() {
        return 'add Chance to package.json';
    }
    async config() {
        console.info('Configuring chance...');
        try {
            console.info('Installing chance');
            await exec('npm i --save-dev chance');
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = new ChanceService();
//# sourceMappingURL=chance.service.js.map