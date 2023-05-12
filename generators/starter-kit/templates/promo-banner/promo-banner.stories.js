import "./promo-banner.scss";
import PromoBannerTemplate from "./promo-banner.twig";

export default {
  title: "Editorial/Promo Banner",
  argTypes: {
    modifier: {
      control: {
        type: "select",
        options: ["bg-dark", "bg-light"],
      }
    },
    text_modifier: {
      control: {
        type: "select",
        options: ["text-light", "text-dark"],
      }
    },
    button_modifier: {
      control: {
        type: "select",
        options: ["btn-light", "btn-primary"],
      }
    },
    title: {
      control: {
        type: "text",
      }
    },
    image: {
      control: {
        type: "text",
      }
    },
    summary: {
      control: {
        type: "text",
      }
    },
    link: {
      control: {
        type: "object",
      }
    }
  },
};

export const PromoBannerDark = PromoBannerTemplate.bind({});
PromoBannerDark.args = {
  "modifier": "bg-dark pt-5 pb-5",
  "text_modifier": "text-light",
  "button_modifier": "btn-light",
  "eyebrow_modifier": "text-bg-light text-uppercase",
  "eyebrow": "We're doing a great job",
  "title": 'Data to enrich your online business',
  "image": "<img src='https://via.placeholder.com/640x480.png' class='img-fluid rounded' alt='Placeholder' />",
  "summary": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non auctor tortor. Suspendisse ullamcorper ipsum arcu, vitae faucibus metus malesuada non. Quisque porttitor accumsan elit, quis varius neque placerat eu.',
  "link": {
    "url": "#",
    "text": "More About Rain",
  },
};

export const PromoBannerLight= PromoBannerTemplate.bind({});

PromoBannerLight.args = {
  "modifier": "bg-light pt-5 pb-5",
  "text_modifier": "text-dark",
  "button_modifier": "btn-primary",
  "eyebrow_modifier": "text-bg-dark text-uppercase",
  "eyebrow": "We're doing a great job",
  "title": 'Data to enrich your online business',
  "image": "<img src='https://via.placeholder.com/640x480.png' class='img-fluid rounded' alt='Placeholder' />",
  "summary": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non auctor tortor. Suspendisse ullamcorper ipsum arcu, vitae faucibus metus malesuada non. Quisque porttitor accumsan elit, quis varius neque placerat eu.',
  "link": {
    "url": "#",
    "text": "More About Rain",
  },
};

export const PromoBannerNoImage= PromoBannerTemplate.bind({});

PromoBannerNoImage.args = {
  "modifier": "bg-dark pt-20 pb-20",
  "text_modifier": "text-light",
  "button_modifier": "btn-light",
  "eyebrow_modifier": "text-bg-secondary text-uppercase",
  "eyebrow": "We're doing a great job",
  "title": 'Data to enrich your online business',
  "image": "",
  "summary": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non auctor tortor. Suspendisse ullamcorper ipsum arcu, vitae faucibus metus malesuada non. Quisque porttitor accumsan elit, quis varius neque placerat eu.',
  "link": {
    "url": "#",
    "text": "More About Rain",
  },
};
