import CardListTemplate from "./card-list.twig";

export default {
  title: "Editorial/Card List",
  argTypes: {
    "section_title": {
      description: "The title of the card list component",
      control: "text",
    },
    "items": {
      description: "Array of the card list item content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const CardList = CardListTemplate.bind({});
CardList.args = {
  "section_title":"From the blog",
  "items": [
    {
      "card": {
        "modifier": "",
        "media": "<img src='./images/card.png' class='card-img-top' alt='test image' />",
        "heading": {
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-4"
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
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-4"
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
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-4"
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
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-4"
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
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-4"
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
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card-title mb-4"
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
  ]
};
