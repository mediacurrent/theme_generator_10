// Import necessary modules using ES Module syntax
import Generator from 'yeoman-generator';
import _ from 'lodash';
import chalk from 'chalk';
import fs from 'fs';
import jsYaml from 'js-yaml';

// Helper to generate component libraries.
import buildComponents from './build-components.js';
// Helper to add in third-party dependencies.
import addThirdParty from './add-third-party.js';

export default class extends Generator {
  constructor(args, options) {
    super(args, options);

    // Allow the theme generator main app to pass through the machine name.
    // Usage: --theme-name=hey_yall
    this.option('theme-name', {
      type: String,
      desc: 'The theme machine name',
    });
  }

  initializing() {
    // Grab the theme machine name if it's passed in.
    const themeName = this.options.themeName || '';
    this.themeNameMachine = _.snakeCase(themeName);
  }

  async prompting() {
    const prompts = [
      {
        type: 'checkbox',
        name: 'howMuchTheme',
        message: 'Which editorial components do you want to add to your theme?',
        choices: [
          {value: 'accordion', name: 'Accordion Group'},
          {value: 'card-list', name: 'Card List'},
          {value: 'carousel-multi', name: 'Carousel (Multi)'},
          {value: 'cta', name: 'CTA'},
          {value: 'embed', name: 'Embed'},
          {value: 'form', name: 'Form'},
          {value: 'gallery-lightbox', name: 'Gallery Lightbox'},
          {value: 'hero', name: 'Hero'},
          {value: 'map', name: 'Map'},
          {value: 'newsletter-form', name: 'Newsletter Form'},
          {value: 'promo-banner', name: 'Promo Banner'},
          {value: 'quote', name: 'Quote'},
          {value: 'side-by-side', name: 'Side-by-side'},
          {value: 'stats', name: 'Stats'},
          {value: 'text-block', name: 'Text Block'},
          {value: 'video-block', name: 'Video Block'},
        ],
      },
    ];

    // If there's no theme machine name provided, prompt the user for it.
    if (!this.themeNameMachine) {
      let defaultThemeName = '';

      try {
        // Check if package.json exists and is readable.
        fs.accessSync(this.destinationPath('package.json'), fs.constants.R_OK);

        // Read package.json and use the "name" as the default theme machine name.
        const pkg = JSON.parse(
          fs.readFileSync(this.destinationPath('package.json'), 'utf8')
        );
        defaultThemeName = pkg.name;
      } catch (err) {
        throw new Error(
          `🚨 ${chalk.red(
            this.destinationPath('package.json')
          )} ${chalk.red('is missing')}.
${chalk.blue('Make sure you\'re running this command from your theme root.')}`
        );
      }

      prompts.push({
        name: 'themeNameMachine',
        message: 'What is your theme\'s machine name? EX: unicorn_theme',
        default: defaultThemeName,
      });
    }

    const props = await this.prompt(prompts);

    // Use the passed theme name or the one provided by the user.
    this.themeNameMachine = this.themeNameMachine || props.themeNameMachine;

    // Remove duplicate components.
    this.exampleComponents = _.uniq(props.howMuchTheme);

    // Filter out components that already exist in the theme.
    try {
      // Read the existing libraries.yml file to get existing components.
      const librariesFile = jsYaml.load(
        fs.readFileSync(
          this.destinationPath(`${this.themeNameMachine}.libraries.yml`),
          'utf8'
        )
      );
      const existingLibraries = Object.keys(librariesFile);

      // Exclude components that already exist.
      this.exampleComponents = _.difference(
        this.exampleComponents,
        existingLibraries
      );
    } catch (e) {
      // No libraries file found; proceed without filtering.
    }

    // Store the props for later use.
    this.props = props;
  }

  async writing() {
    // If any example components were selected...
    if (this.exampleComponents.length > 0) {
      try {
        // Copy over the example components.
        let buildComponentsConfig = await buildComponents({
          exampleComponents: this.exampleComponents,
          app: this,
        });

        // Add in any third-party dependencies before writing to libraries.yml.
        buildComponentsConfig = addThirdParty(buildComponentsConfig);

        const librariesFilePath = this.destinationPath(
          `${this.themeNameMachine}.libraries.yml`
        );


        // Function to append component to libraries.yml with Yeoman's file system
        const appendComponentToFile = (component) => {
          try {
            const componentYaml = jsYaml.dump(component);

            // Read the current file content (if it exists) to prevent overwrite prompt.
            let currentContent = '';
            if (this.fs.exists(librariesFilePath)) {
              currentContent = this.fs.read(librariesFilePath);
            }

            // Append the new content to the existing content.
            const updatedContent = `${currentContent}\n${componentYaml}`;

            // Write the updated content back to the file without triggering overwrite.
            this.fs.write(librariesFilePath, updatedContent);

          } catch (err) {
            this.log(chalk.red(`Failed to update ${this.themeNameMachine}.libraries.yml`));
          }
        };
      

        // Loop through components and append them to the libraries.yml file.
        for (const component of buildComponentsConfig) {
          if (this.options.themeName) {
            // For the case when this is called via the parent generator
            this.fs.append(librariesFilePath, jsYaml.dump(component), {
              trimEnd: false,
              separator: '\n',
            });
          }
          else {
            // Append the component with a newline
            appendComponentToFile(component);
          }
        }
      } catch (error) {
        console.error('An error occurred during the component build process:', error);
      }
    }
  }

  install() {
    // Installation steps, if any.
  }

  end() {
    // Finalization steps, if any.
  }
}
