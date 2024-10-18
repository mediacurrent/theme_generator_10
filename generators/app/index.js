// Import necessary modules
import Generator from 'yeoman-generator';
import chalk from 'chalk';
import _ from 'lodash';
import fs from 'fs';
import {mkdirp} from 'mkdirp';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

// Custom helper modules.
import mcLogo from './mc-logo.js';

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(mcLogo);

    // Provide the user with prompts.
    const prompts = [
      {
        name: 'themeName',
        message: 'What is your theme\'s human readable name?',
        default: _.startCase(this.appname), // Default to current folder name.
      },
      {
        name: 'themeNameMachine',
        message: 'What is your theme\'s machine name? EX: unicorn_theme',
        default: (answers) => {
          // Default to snake case theme name
          return _.snakeCase(answers.themeName);
        },
      },
      {
        name: 'themeDesc',
        message: 'What is your theme\'s description?',
        default: (answers) => {
          // Default to a helpful reminder to change the description later.
          return (
            'Update ' +
            answers.themeName +
            '.info.yml if you want to change the theme description later.'
          );
        },
      },
      {
        name: 'ignoreDist',
        type: 'confirm',
        message:
          'Should we update the .gitignore to ignore compiled files? (i.e. /dist)',
        default: true,
      },
    ];

    const props = await this.prompt(prompts);

    // Should we ignore ./dist files or not?
    this.ignoreDist = props.ignoreDist;

    // Create a underscored version of the theme name.
    this.cleanThemeName = _.snakeCase(props.themeName);

    // Use the user provided theme machine name.
    this.themeNameMachine = props.themeNameMachine;

    // Create a dashed version of the theme name.
    this.dashedThemeName = _.kebabCase(props.themeName);

    // Get pkg info so we can create a 'generated on' comment.
    const pkgPath = path.resolve(__dirname, '../../package.json');
    this.pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

    // To access props later use this.props.someAnswer;
    this.props = props;
  }

  configuring() {
    // Add the Drupal libraries file so we can append additional
    // libraries to it if selected by the user.
    this.fs.copyTpl(
      this.templatePath('_theme_name.libraries.yml'),
      this.destinationPath(`${this.themeNameMachine}.libraries.yml`),
      {
        themeNameMachine: this.themeNameMachine,
      }
    );

    // Prompt the user for starter kit components.
    this.composeWith('mc-d10-theme:starter-kit', {
      themeName: this.themeNameMachine,
    });
  }

  writing() {
    // Create the project configuration.
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        themeName: this.themeNameMachine,
      }
    );

    // Only ignore ./dist files if the user has selected that option.
    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore'),
      {
        ignoreDist: this.ignoreDist,
      }
    );

    // Copy configuration files.
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('prettierrc.json'),
      this.destinationPath('.prettierrc.json')
    );
    this.fs.copy(
      this.templatePath('_README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );
    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    );
    this.fs.copy(
      this.templatePath('stylelintrc.yml'),
      this.destinationPath('.stylelintrc.yml')
    );
    this.fs.copy(
      this.templatePath('.storybook'),
      this.destinationPath('.storybook')
    );

    // Copy and template files that require variable substitution.
    this.fs.copyTpl(
      this.templatePath('.storybook/environment.js'),
      this.destinationPath('.storybook/environment.js'),
      {
        themeNameMachine: this.themeNameMachine,
      }
    );

    // Copy static assets.
    this.fs.copy(
      this.templatePath('static'),
      this.destinationPath('static')
    );
    this.fs.copy(
      this.templatePath('_src/stories/global'),
      this.destinationPath('src/stories/global')
    );
    this.fs.copy(
      this.templatePath('_src/stories/Introduction.stories.mdx'),
      this.destinationPath('src/stories/Introduction.stories.mdx')
    );
    this.fs.copy(
      this.templatePath('_src/stories/assets'),
      this.destinationPath('src/stories/assets')
    );
    this.fs.copy(
      this.templatePath('_src/stories/components'),
      this.destinationPath('src/stories/components')
    );
    this.fs.copy(
      this.templatePath('_src/templates'),
      this.destinationPath('src/templates')
    );

    const templates = [
      'block',
      'content',
      'field',
      'form',
      'layout',
      'layouts',
      'media',
      'misc',
      'navigation',
      'user',
      'views',
    ];

    templates.forEach((template) => {
      // Copy the templates.
      this.fs.copyTpl(
        this.templatePath(`_src/templates/${template}`),
        this.destinationPath(`src/templates/${template}`),
        {
          themeNameMachine: this.themeNameMachine,
          overwrite: false,
        }
      );
    });

    // Copy over the components.
    const components = [
      'alerts',
      'badge',
      'breadcrumb',
      'button',
      'card',
      'carousel',
      'checkbox',
      'color',
      'divider',
      'dropdown',
      'field-label',
      'header',
      'heading',
      'image',
      'inline-menu',
      'inline-navigation',
      'link',
      'logo',
      'main-menu',
      'menu',
      'modal',
      'pager',
      'popover',
      'radio',
      'rich-text',
      'search-box',
      'search-results',
      'shadow',
      'sidebar',
      'site-footer',
      'social-icons',
      'spacing',
      'spinner',
      'toggle',
      'tooltip',
      'typography',
      'utility-nav',
      'video',
    ];

    components.forEach((component) => {
      // Copy the components.
      this.fs.copyTpl(
        this.templatePath(`_src/stories/components/${component}`),
        this.destinationPath(`src/stories/components/${component}`),
        {
          themeNameMachine: this.themeNameMachine,
          overwrite: false,
        }
      );
    });

    // Copy additional assets.
    this.fs.copy(
      this.templatePath('favicon.ico'),
      this.destinationPath('favicon.ico')
    );
    this.fs.copy(
      this.templatePath('logo.svg'),
      this.destinationPath('logo.svg')
    );

    // Build out the compiled folders.
    mkdirp.sync('dist/css');
    mkdirp.sync('dist/fonts');
    mkdirp.sync('dist/images');
    mkdirp.sync('dist/js');

    // Add .gitkeep files to empty directories.
    this.fs.copy(
      this.templatePath('gitkeep'),
      this.destinationPath('dist/css/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('gitkeep'),
      this.destinationPath('dist/fonts/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('gitkeep'),
      this.destinationPath('dist/images/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('gitkeep'),
      this.destinationPath('dist/js/.gitkeep')
    );

    // Add build tools.
    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('_gulp-tasks'),
      this.destinationPath('gulp-tasks')
    );
    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );

    // Create the theme files.
    this.fs.copyTpl(
      this.templatePath('_theme_name.info.yml'),
      this.destinationPath(`${this.themeNameMachine}.info.yml`),
      {
        themeName: this.props.themeName,
        themeDesc: this.props.themeDesc,
        themeNameMachine: this.themeNameMachine,
        pkg: this.pkg,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_theme_name.breakpoints.yml'),
      this.destinationPath(`${this.themeNameMachine}.breakpoints.yml`),
      {
        themeName: this.props.themeName,
        themeNameMachine: this.themeNameMachine,
      }
    );
    this.fs.copyTpl(
      this.templatePath('_theme_name.theme'),
      this.destinationPath(`${this.themeNameMachine}.theme`),
      {
        themeNameMachine: this.themeNameMachine,
      }
    );

    this.fs.copy(
      this.templatePath('_screenshot.png'),
      this.destinationPath('screenshot.png')
    );
  }

  install() {
    
    // Install specific dev dependencies
    const devDependencies = ['yo', 'generator-mc-d10-theme'];

    // Add devDependencies to package.json and install them
    this.addDevDependencies(devDependencies);
  }

  end() {
    this.log(
      chalk.cyan.bgBlack.bold(
        `☠️  NOTE: Your new generated theme contains a fair bit of boilerplate code.
This is by design. If you don't need it PLEASE delete it.
You can always rerun the generator some other time in a different directory
and copy over what you're missing.`
      )
    );
    this.log(chalk.red('🚀'));
  }
}
