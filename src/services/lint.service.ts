import { eslintrc } from './scripts/eslintrc.script';
import * as util from 'util';
import { writeFileSync } from 'fs';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';

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
      await writeFileSync('.eslintrc.js', eslintrc);
      console.info('Adding lint script to package.json');
      npmAddScript({ key: 'lint', value: 'eslint "{src,apps,libs,test}/**/*.ts" --fix', force: true });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new LintService();
