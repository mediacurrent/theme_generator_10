import "./carousel.scss";
import CarouselTemplate from "./carousel.twig";
import "./carousel.es6.js";

export default {
  title: "Editorial/Carousel",
  argTypes: {
    list: {
      description: "Define the array of carousel items",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Carousel = CarouselTemplate.bind({});

Carousel.args = {
  "id": "single",
  "list": [
    {
      "active": true,
      "image": "<img src='https://via.placeholder.com/640x480.png' class='d-block w-100' alt='test image' />",
      "title": "Title Lorem Ipsum Dolor",
      "button": {
        "text": "Button Text",
        "url": "#",
        "modifier": "btn-primary",
      }
    },
    {
      "image": "<img src='https://via.placeholder.com/640x480.png' class='d-block w-100' alt='test image' />",
      "title": "Title Lorem Ipsum Dolor 2",
      "button": {
        "text": "Button Text",
        "url": "#",
        "modifier": "btn-primary",
      }
    },
    {
      "image": "<img src='https://via.placeholder.com/640x480.png' class='d-block w-100' alt='test image' />",
      "title": "Title Lorem Ipsum Dolor 3",
      "button": {
        "text": "Button Text",
        "url": "#",
        "modifier": "btn-primary",
      }
    }
  ]
};
