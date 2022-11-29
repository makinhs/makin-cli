#!/usr/bin/env node
import * as Logger from 'better-logging';

Logger.betterLogging(console);
import * as chalk from 'chalk';
import { Command } from 'commander';
import * as figlet from 'figlet';
import allService from './services/all.service';
import jestService from './services/jest.service';
import prettierService from './services/prettier.service';
import chanceService from './services/chance.service';
import lintService from './services/lint.service';
import typescriptService from './services/typescript.service';
import commitizenService from './services/commitzen.service';

const program = new Command();

(async () => {
  console.info(chalk.green(figlet.textSync('makin-cli', { horizontalLayout: 'full' })));

  program
    .version('0.0.22')
    .description('A CLI that scaffolds some quality gates in your app')
    .option('-a, --all', allService.getDescription())
    .option('-p, --prettier', prettierService.getDescription())
    .option('-c, --chance', chanceService.getDescription())
    .option('-l, --lint', lintService.getDescription())
    .option('-ts, --typescript', typescriptService.getDescription())
    .option('-cz, --commitizen', commitizenService.getDescription())
    .option('-j, --jest', jestService.getDescription())
    .parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  } else {
    console.info('Welcome back ;)');
    const options = program.opts();
    if (options.all) {
      await allService.config();
    } else {
      if (options.prettier) await prettierService.config();
      if (options.lint) await lintService.config();
      if (options.chance) await chanceService.config();
      if (options.typescript) await typescriptService.config();
      if (options.commitizen) await commitizenService.config();
      if (options.jest) await jestService.config();
    }
  }
})();
