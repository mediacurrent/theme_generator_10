// Import necessary modules using ES Module syntax
import Generator from 'yeoman-generator';
import _ from 'lodash';
import chalk from 'chalk';
import fs from 'fs';
import jsYaml from 'js-yaml';

export default class extends Generator {
  constructor(args, options) {
    super(args, options);

    // Allow the theme generator main app to pass through the machine name.
    // --theme-name=hey_yall
    this.option('theme-name', {
      type: String,
      desc: 'The theme machine name',
    });

    // Allow the user to pass in a component name.
    // --name=HeyYall
    this.option('name', {
      type: String,
      desc: 'The component name',
    });

    // Allow the user to opt in to a JS behavior file.
    // --include-js
    this.option('include-js', {
      type: Boolean,
      desc: 'Include a JS file',
    });
  }

  initializing() {
    // Create an object to contain all our name variations.
    this.componentName = {};

    const rawName = this.options.name || '';
    // Preserve the raw layout name.
    this.componentName.raw = rawName;
    // Create a dashed version of the layout name.
    this.componentName.dashed = _.kebabCase(rawName);

    // Grab the theme machine name if it's passed in.
    const themeName = this.options.themeName || '';
    this.themeNameMachine = _.snakeCase(themeName);
  }

  // Prompts need at least two arguments passed in to work:
  // theme name and component name. Without those, we can't create
  // a basic component.
  async prompting() {
    // If we DO have both the theme name _and_ component name passed
    // as arguments, we can skip all the prompts.
    if (this.options.themeName && this.options.name) {
      return;
    }

    let defaultThemeName = '';

    try {
      // See if package.json exists.
      fs.accessSync(this.destinationPath('package.json'), fs.constants.R_OK);
      // If it does, read it and use the name as our default
      // theme machine name.
      const pkg = JSON.parse(
        fs.readFileSync(this.destinationPath('package.json'), 'utf8')
      );
      defaultThemeName = pkg.name;
    } catch (err) {
      // If it doesn't, let the user know we can't continue.
      // We need to run from the theme root.
      throw new Error(
        `
🚨 ${chalk.red(this.destinationPath('package.json'))} ${chalk.red('is missing')}.
${chalk.blue('Make sure you\'re running this command from your theme root.')}`
      );
    }

    const prompts = [
      {
        name: 'themeNameMachine',
        message: 'What is your theme\'s machine name? EX: unicorn_theme',
        default: defaultThemeName,
      },
      {
        name: 'name',
        message: 'What should we name your component? EX: Hero',
        default: 'Hero',
      },
    ];

    const props = await this.prompt(prompts);

    // Use the user-provided theme machine name.
    this.themeNameMachine = _.snakeCase(props.themeNameMachine);

    // Use the component name provided.
    this.componentName.raw = props.name;
    // Create a dashed version of the layout name.
    this.componentName.dashed = _.kebabCase(props.name);

    // To access props later use this.props.someAnswer;
    this.props = props;
  }

  writing() {
    // Build out the library structure so we can append it to the
    // libraries.yml file.
    const component = this.componentName.dashed;

    // Create the component library object.
    const componentLibrary = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {},
          },
        },
      },
    };

    const librariesFilePath = this.destinationPath(
      `${this.themeNameMachine}.libraries.yml`
    );

    // Add a blank line so the file is nicely formatted and the
    // appended data doesn't run into the current data within the file.
    try {
      fs.appendFileSync(librariesFilePath, '\n');
    } catch (err) {
      this.log(
        chalk.red(
          `Failed to update ${this.themeNameMachine}.libraries.yml: ${err.message}`
        )
      );
    }

    // Update the libraries.yml file with the new component library.
    try {
      fs.appendFileSync(librariesFilePath, jsYaml.dump(componentLibrary));
    } catch (err) {
      this.log(
        chalk.red(
          `Failed to update ${this.themeNameMachine}.libraries.yml: ${err.message}`
        )
      );
    }

    // Write each file the component needs, adding the component
    // name where needed.
    const componentPath = `src/stories/components/${this.componentName.dashed}`;

    this.fs.copyTpl(
      this.templatePath('_component/_component.json'),
      this.destinationPath(`${componentPath}/${this.componentName.dashed}.json`),
      {
        name: this.componentName.raw,
        dashed: this.componentName.dashed,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_component/_component.scss'),
      this.destinationPath(`${componentPath}/${this.componentName.dashed}.scss`),
      {
        name: this.componentName.raw,
        dashed: this.componentName.dashed,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_component/_component.twig'),
      this.destinationPath(`${componentPath}/${this.componentName.dashed}.twig`),
      {
        dashed: this.componentName.dashed,
        themeNameMachine: this.themeNameMachine,
      }
    );
  }

  end() {
    this.log('------------------------------------------------------------');
    this.log(
      `🎉 Created a new component named: "${chalk.red(
        this.componentName.raw
      )}"!`
    );
    this.log('------------------------------------------------------------');

    // If the user followed the prompt workflow, make sure they know they
    // can run all this on the command line without the prompts.
    if (!this.options.name) {
      this.log(
        'To generate components faster, you can pass in arguments to the subgenerator!'
      );
      this.log('For example: 👇');
      this.log(
        chalk.blue(
          `npm run generate -- --name="${this.componentName.raw}" --theme-name="${this.themeNameMachine}"`
        )
      );
      this.log('Or add a Drupal JavaScript behavior to that with:');
      this.log(
        chalk.blue(
          `npm run generate -- --name="${this.componentName.raw}" --theme-name="${this.themeNameMachine}" --include-js`
        )
      );
    }
  }
}
