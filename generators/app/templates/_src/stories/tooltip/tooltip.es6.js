/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

(function (Drupal) {
  var bootstrap;

  /**
   * Setup and attach the Popover behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.popover = {
    attach: function () {
      if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
        [...tooltipTriggerList].map(
          (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );
      }
    }
  };
})(Drupal);
