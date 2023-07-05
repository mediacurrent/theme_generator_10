import "./carousel-multi.scss";
import CarouselMultiTemplate from "./carousel-multi.twig";
import "./carousel-multi.es6.js";

export default {
  title: "Editorial/Carousel Multi",
  argTypes: {
    items: {
      description: "Define the array of carousel slide items",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const CarouselMulti = CarouselMultiTemplate.bind({});
CarouselMulti.play = async ({ canvasElement }) => {
  Drupal.behaviors.carouselMulti.attach(canvasElement);
};

CarouselMulti.args = {
  "id": "multi",
  "title": "Case Studies",
  "modifier": "overflow-hidden",
  "items": [
    {
      "card": {
        "modifier": "",
        "media": "<img src='./images/card.png' class='card-img-top' alt='test image' />",
        "heading": {
          "title": "Phasellus auctor, turpis 1",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title text-dark mb-2"
        },
        "tags": [
          'New feature',
          'Announcement',
        ],
        "summary_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Link 1"
        },
        "link2": {
          "url": "#",
          "text":"Link 2"
        }
      }
    },
    {
      "card": {
        "modifier": "",
        "media": "<img src='./images/card.png' class='card-img-top' alt='test image' />",
        "heading": {
          "title": "Phasellus auctor, turpis 2",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-2"
        },
        "tags": [
          'New feature',
          'Announcement',
        ],
        "summary_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Link 1"
        },
        "link2": {
          "url": "#",
          "text":"Link 2"
        }
      }
    },
    {
      "card": {
        "modifier": "",
        "media": "<img src='./images/card.png' class='card-img-top' alt='test image' />",
        "heading": {
          "title": "Phasellus auctor, turpis 3",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-2"
        },
        "tags": [
          'New feature',
          'Announcement',
        ],
        "summary_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Link 1"
        },
        "link2": {
          "url": "#",
          "text":"Link 2"
        }
      }
    },
    {
      "card": {
        "modifier": "",
        "media": "<img src='./images/card.png' class='card-img-top' alt='test image' />",
        "heading": {
          "title": "Phasellus auctor, turpis 4",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-2"
        },
        "tags": [
          'New feature',
          'Announcement',
        ],
        "summary_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Link 1"
        },
        "link2": {
          "url": "#",
          "text":"Link 2"
        }
      }
    }
  ],
  "link": {
    "url": "#",
    "text":"See all Case Studies"
  },
};
