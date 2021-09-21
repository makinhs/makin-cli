import * as util from 'util';
import * as npmAddScript from 'npm-add-script';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);
class CommitzenService{
  getLintDescription(){
    return 'add commitzen and default configuration to support standard commit messages using npm run commit';
  }

  async config(){
    console.info('Configuring typescript...');

    try {
      console.info('Installing commitizen');
      await exec('npm i --save-dev commitizen');
      console.info('Configuring commitizen init');
      await exec('commitizen init cz-conventional-changelog --save-dev --save-exact --force');
      console.info('Adding commit script to be used over git commit');
      npmAddScript({ key: 'commit', value: 'cz', force: true });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new CommitzenService();