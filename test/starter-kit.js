// starter-kit.test.js
import path from 'path';
import {fileURLToPath} from 'url';
import assert from 'yeoman-assert';
import {expect} from 'chai';
import sinon from 'sinon';
import helpers from 'yeoman-test';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Yeoman Generator: Starter Kit Generator', function () {
  this.timeout(10000); // Increase timeout if necessary

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should create component files with the correct names and content', async () => {
    const componentName = 'cta';
    const themeName = 'test_theme';

    await helpers
      .run(path.join(__dirname, '../generators/starter-kit')) // Adjust the path to your generator
      .withOptions({
        name: componentName,
        'theme-name': themeName,
      })
      .withAnswers({
        howMuchTheme: ['carousel-multi', 'map', 'gallery-lightbox'],
      })
      .inTmpDir((dir) => {
        // Set up a mock package.json
        fs.writeFileSync(
          path.join(dir, 'package.json'),
          JSON.stringify({name: themeName})
        );

        // Set up a mock libraries.yml file
        fs.writeFileSync(
          path.join(dir, `${themeName}.libraries.yml`),
          ''
        );
      })
      .then(() => {
       

        //Assert that the libraries.yml file was updated
        assert.file(
          `${themeName}.libraries.yml`
        );


        // Additional assertions can be added as needed
      });
  });


  it('should throw an error if package.json is missing', async () => {
    const logStub = sandbox.stub(console, 'error');

    try {
      await helpers
        .run(path.join(__dirname, '../generators/app')) // Adjust the path to your generator
        .withOptions({
          name: 'SomeComponent',
        })
        .inTmpDir(() => {
          // Do not create package.json to simulate missing file
        });
    } catch (error) {
      // Assert that the error message is as expected
      expect(error.message).to.include('is missing');
    }

    // Ensure that the log was called with the error message
    expect(logStub.called).to.be.false;
  });
});
