import { tsconfig } from './scripts/tsconfig.script';
import * as util from 'util';
import { writeFileSync } from 'fs';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);
class TypescriptService{
  getLintDescription(){
    return 'add Typescript related packages to package.json, and a generic configuration file (.tsconfig.json), using src/index.ts as the main entrance of your app. Change it in package.json after the build if yours is different';
  }
  async config(){
    console.info('Configuring typescript...');

    try {
      console.info('Installing typescript @types/node ts-node');
      await exec('npm i --save-dev typescript @types/node ts-node');
      console.info('Adding tsconfig.json');
      await writeFileSync('tsconfig.json', tsconfig);
      console.info('Adding build and start scripts to package.json');
      npmAddScript({ key: 'build', value: 'tsc -p .', force: true });
      npmAddScript({ key: 'start', value: 'ts-node src/index.ts', force: true });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new TypescriptService()