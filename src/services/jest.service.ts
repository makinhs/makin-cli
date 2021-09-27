import * as util from 'util';
import { writeFileSync } from 'fs';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';
import { jestConfig } from './scripts/jest.config';

const exec = util.promisify(child_process.exec);

class JestService {
  getDescription() {
    return 'add jest to package.json, with a test script that runs jest';
  }

  async config() {
    console.info('Configuring jest...');
    try {
      console.info('Installing jest and required Typescript dependencies ');
      await exec('npm i --save-dev jest @types/jest ts-jest');
      console.info('Configuring jest.config.ts');
      await writeFileSync('jest.config.ts', jestConfig);
      console.info('Adding jest script to package.json');
      npmAddScript({ key: 'test', value: 'jest', force: true });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new JestService();
