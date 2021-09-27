"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prettier_service_1 = require("./prettier.service");
const lint_service_1 = require("./lint.service");
const typescript_service_1 = require("./typescript.service");
const commitzen_service_1 = require("./commitzen.service");
const jest_service_1 = require("./jest.service");
class AllService {
    getDescription() {
        return 'Install all features this CLI provides in once. Use by your own risk';
    }
    async config() {
        await typescript_service_1.default.config();
        await prettier_service_1.default.config();
        await lint_service_1.default.config();
        await commitzen_service_1.default.config();
        await jest_service_1.default.config();
    }
}
exports.default = new AllService();
//# sourceMappingURL=all.service.js.map