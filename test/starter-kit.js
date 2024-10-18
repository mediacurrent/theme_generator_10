// starter-kit.test.js

import path, {dirname} from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import {fileURLToPath} from 'url';

// Recreate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('generator-mc-d10-theme:starter-kit', () => {
  before(async () => {
    await helpers.run(path.join(__dirname, '../generators/starter-kit'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
