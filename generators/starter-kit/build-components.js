// Special helper for adding additional library dependencies.
import addDependency from './add-dependency.js';

export default async function buildComponents({exampleComponents, app}) {
  // Build an object that will be used to populate the *.libraries.yml file
  // with data for any selected example components.
  return await Promise.all(
    exampleComponents.map(async (component) => {
      // Copy the selected component into the theme.
      // Exclude the templates folder; it needs to go in a different directory.
      app.fs.copyTpl(
        [app.templatePath(`${component}`)],
        app.destinationPath(`src/stories/components/${component}`),
        {
          themeNameMachine: app.themeNameMachine,
          overwrite: false,
        }
      );

      // Look for additional dependencies or default to CSS.
      return (
        addDependency(component, app.themeNameMachine) || {
          [component]: {
            css: {
              component: {
                [`dist/css/${component}.css`]: {},
              },
            },
          },
        }
      );
    })
  );
}
