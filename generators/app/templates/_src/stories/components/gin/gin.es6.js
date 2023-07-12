/**
 * @file
 * Behaviors for the Gin Theme.
 */
/* eslint-disable max-len */

(function ($, Drupal) {
  /**
   * Setup and attach the Gin Override behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.ginOverrides = {
    attach: function () {
      const $heroLayout = $('.form-item-settings-block-form-field-hero-layout select');

      // Only run if the hero layout field exists.
      if ($heroLayout.length) {
        const $viewModeSelector = $('.form-item-settings-view-mode select');

        // Change the view mode selector based on the hero layout.
        $heroLayout.on('change', function () {
          const $heroLayoutValue = $(this).val();

          if ($heroLayoutValue === 'overlay') {
            $viewModeSelector.val('default');
          }
          else if ($heroLayoutValue === 'image_left') {
            $viewModeSelector.val('hero_square');
          }
          else if ($heroLayoutValue === 'image_right') {
            $viewModeSelector.val('hero_square');
          }
          else {
            $viewModeSelector.val('hero');
          }
        });
      }
    }
  };
})(jQuery, Drupal);
