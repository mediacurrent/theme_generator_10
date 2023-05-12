// For specific components we need to add additional dependencies.
module.exports = function addDependency (component, themeNameMachine) {
  let libraries = {};

  // Accordion.
  if (component === 'accordion') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        }
      },
      dependencies: [
        `${themeNameMachine}/bootstrap-js`
      ]
    };
  }
  // Carousel (multi).
  if (component === 'carousel-multi') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        js: {
          [`dist/js/${component}.es6.js`]: {}
        },
        dependencies: [
          `core/drupal`
        ]
      }
    };
  }
   // Gallery Carousel.
   if (component === 'gallery-lightbox') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        dependencies: [
          `${themeNameMachine}/bootstrap-js`
        ]
      }
    };
  }
  // Hero.
  if (component === 'hero') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        dependencies: [
          `${themeNameMachine}/card`
        ]
      }
    };
  }
  // Map.
  if (component === 'map') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        dependencies: [
          `${themeNameMachine}/card`
        ]
      }
    };
  }

  return Object.keys(libraries).length && libraries;
};
