import { prettier } from './scripts/prettierrc.script';
import { eslintrc } from './scripts/eslintrc.script';
import * as util from 'util';
import { writeFileSync } from 'fs';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';

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
      await writeFileSync('.prettierrc', prettier);
      console.info('Adding format script to package.json');
      npmAddScript({ key: 'format', value: 'prettier --write "src/**/*.ts"', force: true });
    } catch (err) {
      console.error(err);
    }
  }

  async configLint() {
    console.info('Configuring lint...');
    try {
      console.info('Installing eslint');
      await exec('npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser');
      console.info('Configuring .eslintrc');
      await writeFileSync('.eslintrc.js', eslintrc);
      console.info('Adding lint script to package.json');
      npmAddScript({ key: 'lint', value: 'eslint "{src,apps,libs,test}/**/*.ts" --fix', force: true });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new PrettierLintService();
