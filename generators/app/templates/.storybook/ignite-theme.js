// Follow these simple steps to customize the Storybook theme:
// 1) Duplicate & rename this file.
// 2) Add your logo to the static/images folder, and edit logo path to match.
// 3) You can set the UI to use light or dark mode using the base value.
// 4) Update the brandTitle, brandURL.
// 5) Edit .storybook/manager.js to use your new file.
import { create } from '@storybook/theming';
import logo from '../static/images/logo-light.svg';

export default create({
  base: 'auto',
  brandTitle: 'Mediacurrent Ignite Design System',
  brandUrl: '#',
  brandImage: logo,
  brandTarget: '_blank',
});
