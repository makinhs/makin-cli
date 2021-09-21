#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger = require("better-logging");
Logger.betterLogging(console);
const chalk = require("chalk");
const commander_1 = require("commander");
const figlet = require("figlet");
const prettier_lint_service_1 = require("./services/prettier-lint.service");
const typescript_service_1 = require("./services/typescript.service");
const commitzen_service_1 = require("./services/commitzen.service");
const program = new commander_1.Command();
(async () => {
    console.info(chalk.green(figlet.textSync('makin-cli', { horizontalLayout: 'full' })));
    program
        .version('0.0.15')
        .description('A CLI that scaffolds some quality gates in your app')
        .option('-p, --prettier', prettier_lint_service_1.default.getPrettierDescription())
        .option('-l, --lint', prettier_lint_service_1.default.getLintDescription())
        .option('-ts, --typescript', typescript_service_1.default.getLintDescription())
        .option('-cz, --commitizen', commitzen_service_1.default.getLintDescription())
        .parse(process.argv);
    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
    else {
        console.info('Welcome back ;)');
        const options = program.opts();
        if (options.prettier)
            await prettier_lint_service_1.default.configPrettier();
        if (options.lint)
            await prettier_lint_service_1.default.configLint();
        if (options.typescript)
            await typescript_service_1.default.config();
        if (options.commitizen)
            await commitzen_service_1.default.config();
    }
})();
//# sourceMappingURL=index.js.map