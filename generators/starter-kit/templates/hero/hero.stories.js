import './hero.scss';
import HeroTemplate from './hero.twig';

export default {
  title: 'Editorial/Hero',
  argTypes: {
    eyebrow: {
      name: 'Eyebrow Text',
      description: 'Eyebrow displays above heading.',
      control: 'text'
    },
    title: {
      name: 'Heading',
      description: 'Main headline, usually the page title.',
      control: 'object'
    },
    subtitle: {
      name: 'Subhead',
      description: 'Subhead displays after heading.',
      control: 'object'
    },
    button: {
      name: 'Button',
      description: 'Call to action link styled as button.',
      control: 'object'
    },
    layout: {
      name: 'Layout Controls',
      description: 'Style options.',
      control: 'select',
      options: {
        'Rounded corners': 'rounded',
        'None': 'none',
      },
    },
    modifier: {
      name: 'Modifier',
      description: 'Modify the text alignment and position.',
      control: 'select',
      options: {
        'Default': 'col-md-10 col-lg-8 default text-center sb-center sb-only',
        'Align left': 'col-sm-12 col-lg-8 me-lg-auto text-start sb-only',
        'Align right': 'col-sm-12 col-lg-8 ms-lg-auto text-end sb-right sb-only',
        'Pin left': 'col-sm-12 col-lg-6 col-xl-5 me-lg-auto me-xl-auto text-start sb-only',
        'Pin right': 'col-sm-12 col-lg-6 col-xl-5 offset-lg-6 offset-xl-7 text-start sb-only'
      },
    },
    max_width: {
      name: 'Max Width',
      description: 'Controls component’s maximum width.',
      control: 'select',
      options: {
        'Default': 'full-width',
        'Max 900': '900',
        'Max 1200': '1200',
      },
    },
    sb_overlay: {
      name: 'Remove Overlay',
      description: 'Option to remove image overlay and change text to dark.',
      control: 'boolean',
    },
    subtitle_modifier: {
      table: { disable: true }
    },
    media: {
      table: { disable: true }
    }
  },
  decorators: [
    (story, args) => `<div style="max-width:${args.args.max_width}px;position:relative;margin:0 auto;" class="sb-only">${story()}</div>`,
  ],
};

export const Hero = HeroTemplate.bind({});
Hero.args = {
  media: '<img src="https://picsum.photos/1600/900" alt="Placeholder image" />',
  eyebrow: 'Ignite Eyebrow',
  title: 'Shortcut your design and development',
  subtitle: 'Quickly design and customize responsive mobile-first sites with Bootstrap.',
  button: {
    text: 'Button label',
    url: '#',
    modifier: 'btn-primary has-icon',
    icon: 'arrow_right_alt'
  },
  sb_overlay: false,
  modifier: 'col-md-10 col-lg-8 default text-center sb-center sb-only',
  layout: 'rounded',
};
