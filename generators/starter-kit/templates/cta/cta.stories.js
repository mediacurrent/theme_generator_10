import "./cta.scss";
import CTATemplate from "./cta.twig";

export default {
  title: "Editorial/CTA",
  argTypes: {
    cta: {
      description: "Define the CTA content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Primary = CTATemplate.bind({});
Primary.args = {
  "button": {
    "url": "#",
    "modifier": "btn-primary",
    "text": "Primary Button",
    "icon": 'arrow_right_alt',
  }
};

export const Secondary = CTATemplate.bind({});
Secondary.args = {
  "button": {
    "url": "https://www.mediacurrent.com",
    "modifier": "btn-outline-primary",
    "text": "Secondary Button",
    "icon": 'arrow_right_alt',
  }
};
