<?php

/**
 * @file
 * Theme settings form for Ignite Theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function <%= themeNameMachine %>_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['custom_colors'] = [
    '#type' => 'details',
    '#title' => t('Customize Colors'),
    '#open' => TRUE,
  ];

  $form['custom_colors']['logo_footer'] = [
    '#type' => 'textfield',
    '#title' => t('Logo footer image path'),
    '#default_value' => theme_get_setting('logo_footer'),
    '#size' => 25,
    '#description' => t('The alternate logo path to use in the footer component.'),
    '#required' => TRUE,
  ];

  $form['custom_colors']['primary_color'] = [
    '#type' => 'textfield',
    '#title' => t('Primary color'),
    '#default_value' => theme_get_setting('primary_color'),
    '#size' => 10,
    '#description' => t('The primary color.'),
    '#required' => TRUE,
  ];

  $form['custom_colors']['secondary_color'] = [
    '#type' => 'textfield',
    '#title' => t('Secondary color'),
    '#default_value' => theme_get_setting('secondary_color'),
    '#size' => 10,
    '#description' => t('The secondary color.'),
    '#required' => TRUE,
  ];

  $form['custom_colors']['bg_dark_color'] = [
    '#type' => 'textfield',
    '#title' => t('Dark background color'),
    '#default_value' => theme_get_setting('bg_dark_color'),
    '#size' => 10,
    '#description' => t('The default dark background color.'),
    '#required' => TRUE,
  ];
}
