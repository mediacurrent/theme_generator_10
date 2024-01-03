import '../src/stories/global/bootstrap.scss';

// import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// ^ uncomment to include Storybook viewports

const bootstrapViewports = {
  bsPhone: {
    name: 'iPhone 15',
    styles: {
      width: '393px',
      height: '852px',
    },
  },
  bsSmall: {
    name: 'Bootstrap sm',
    styles: {
      width: '576px',
      height: '',
    },
  },
  bsMedium: {
    name: 'Bootstrap md',
    styles: {
      width: '768px',
      height: '',
    },
  },
  bsLarge: {
    name: 'Bootstrap lg',
    styles: {
      width: '992px',
      height: '',
    },
  },
  bsXLarge: {
    name: 'Bootstrap xl',
    styles: {
      width: '1200px',
      height: '',
    },
  },
  bsXXLarge: {
    name: 'Bootstrap xxl',
    styles: {
      width: '1400px',
      height: '',
    },
  },
  bsXXLarge: {
    name: 'Bootstrap xxxl',
    styles: {
      width: '1728px',
      height: '',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
  },
  viewport: {
    viewports: {
      // ...MINIMAL_VIEWPORTS,
      // ^ uncomment to include Storybook viewports
      ...bootstrapViewports,
    },
  },
};
