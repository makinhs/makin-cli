import { prettier } from './scripts/prettierrc.script';
import * as util from 'util';
import { writeFileSync } from 'fs';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);

class PrettierService {
  getDescription() {
    return 'add prettier to package.json, with a format script and a generic configuration file (.prettierrc)';
  }

  async config() {
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
}

export default new PrettierService();
