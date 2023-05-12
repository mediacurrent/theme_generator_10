import "./button.scss";
import ButtonTemplate from "./button.twig";

export default {
  title: "General/Button",
  argTypes: {
    button: {
      description: "Define the button content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  "button": {
    "url": "#",
    "modifier": "btn-primary",
    "text": "Primary Button",
    "icon": 'arrow_right_alt',
  }
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  "button": {
    "url": "https://www.mediacurrent.com",
    "modifier": "btn-outline-primary",
    "text": "Secondary Button",
    "icon": 'arrow_right_alt',
  }
};
