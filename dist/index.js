#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger = require("better-logging");
Logger.betterLogging(console);
const chalk = require("chalk");
const commander_1 = require("commander");
const figlet = require("figlet");
const prettier_service_1 = require("./services/prettier.service");
const lint_service_1 = require("./services/lint.service");
const typescript_service_1 = require("./services/typescript.service");
const commitzen_service_1 = require("./services/commitzen.service");
const all_service_1 = require("./services/all.service");
const program = new commander_1.Command();
(async () => {
    console.info(chalk.green(figlet.textSync('makin-cli', { horizontalLayout: 'full' })));
    program
        .version('0.0.18')
        .description('A CLI that scaffolds some quality gates in your app')
        .option('-p, --prettier', prettier_service_1.default.getDescription())
        .option('-l, --lint', lint_service_1.default.getDescription())
        .option('-ts, --typescript', typescript_service_1.default.getDescription())
        .option('-cz, --commitizen', commitzen_service_1.default.getDescription())
        .option('-a, --all', all_service_1.default.getDescription())
        .parse(process.argv);
    if (!process.argv.slice(2).length) {
        program.outputHelp();
    }
    else {
        console.info('Welcome back ;)');
        const options = program.opts();
        if (options.all) {
            await all_service_1.default.config();
        }
        else {
            if (options.prettier)
                await prettier_service_1.default.config();
            if (options.lint)
                await lint_service_1.default.config();
            if (options.typescript)
                await typescript_service_1.default.config();
            if (options.commitizen)
                await commitzen_service_1.default.config();
        }
    }
})();
//# sourceMappingURL=index.js.map