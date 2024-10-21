// app.test.js

import path, {dirname} from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('generator-mc-d-10-theme:app', () => {
  before(async () => {
    await helpers.run(path.join(__dirname, '../generators/app'))
      .withAnswers({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'package.json'
    ]);
  });
});
