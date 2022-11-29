import * as util from 'util';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);

class ChanceService {
  getDescription() {
    return 'add Chance to package.json';
  }

  async config() {
    console.info('Configuring chance...');
    try {
      console.info('Installing chance');
      await exec('npm i --save-dev chance');
    } catch (err) {
      console.error(err);
    }
  }
}

export default new ChanceService();
