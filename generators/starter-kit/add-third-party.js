// For specific components we need to add additional dependencies.
module.exports = function addThirdParty(libraries) {

  // See if Bootstrap is one of the libraries already.
  const containsBootstrap = libraries.find(lib => lib['bootstrap-js']);

  // See if Popover is one of the libraries already.
  const containsPopover = libraries.find(lib => lib['popover-cdn']);

  // If bootstrap-js hasn't been added yet and it's needed, add it.
  if (!containsBootstrap) {
    const bootstrap = {
      ['bootstrap-js']: {
        js: {
          ['//cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js']: { }
        },
      }
    };
    // Add bootstrap to the libraries object.
    libraries.push(bootstrap);
  }
  // If popover hasn't been added yet and it's needed, add it.
  if (!containsPopover) {
    const popover = {
      ['popover-cdn']: {
        js: {
          ['//cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js']: { }
        },
      }
    };
    // Add popover to the libraries object.
    libraries.push(popover);
  }

  return libraries;
};
