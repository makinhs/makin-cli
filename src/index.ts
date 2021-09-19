#!/usr/bin/env node
import * as Logger from 'better-logging';
Logger.betterLogging(console);
import * as chalk from 'chalk';
import { Command } from 'commander';
import * as figlet from 'figlet';
import prettierLintService from './services/prettier-lint.service';
const program = new Command();

(async () => {
  console.info(chalk.green(figlet.textSync('makin-cli', { horizontalLayout: 'full' })));

  program
    .version('0.0.8')
    .description('A CLI that scaffolds some quality gates in your app')
    .option('-p, --prettier', prettierLintService.getPrettierDescription())
    .option('-l, --lint', prettierLintService.getLintDescription())
    .parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  } else {
    console.info('Welcome back ;)');
    const options = program.opts();
    if (options.prettier) await prettierLintService.configPrettier();
    if (options.lint) await prettierLintService.configLint();
  }
})();
