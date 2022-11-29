import * as util from 'util';
import * as child_process from 'child_process';

const exec = util.promisify(child_process.exec);

class NestMongooseService {
  getDescription() {
    return 'add @nestjs/mongoose, mongoose, @types/mongoose to package.json, with a basic CRUD sample';
  }

  async config() {
    console.info('Configuring mongoose...');
    try {
      console.info('Installing @nestjs/mongoose, mongoose');
      await exec('npm i --save @nestjs/mongoose mongoose');
      console.info('Installing @types/mongoose');
      await exec('npm i --save-dev @types/mongoose');
    } catch (err) {
      console.error(err);
    }
  }
}

export default new NestMongooseService();
