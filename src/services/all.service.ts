import prettierService from './prettier.service';
import lintService from './lint.service';
import typescriptService from './typescript.service';
import commitizenService from './commitzen.service';

class AllService {
  getDescription() {
    return 'Install all features this CLI provides in once. Use by your own risk';
  }

  async config() {
    await typescriptService.config();
    await prettierService.config();
    await lintService.config();
    await commitizenService.config();
  }
}

export default new AllService();
