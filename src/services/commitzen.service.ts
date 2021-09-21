import * as util from 'util';
import { writeFileSync } from 'fs';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);
class CommitzenService{
  getLintDescription(){
    return 'add commitzen and default configuration in assumption that your repo is Commitizen-friendly';
  }

  async config(){
    console.info('Configuring typescript...');

    try {
      console.info('Installing commitizen');
      await exec('npm i --save-dev commitizen');
      await exec('commitizen init cz-conventional-changelog --save-dev --save-exact --force');
      // console.info('Adding tsconfig.json');
      // await writeFileSync('tsconfig.json', tsconfig);
      console.info('Adding commit script to be used over git commit');
      npmAddScript({ key: 'commit', value: 'cz', force: true });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new CommitzenService();