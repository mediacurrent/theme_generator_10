import "./main-menu.scss";
import MainMenuTemplate from "./main-menu.twig";

export default {
  title: "Navigation/Main Navigation",
  argTypes: {
    items: {
      description: "Define the array of main menu items",
      control: "array",
      type: {
        required: true,
      },
    },
  },
};

export const MainNavigation = MainMenuTemplate.bind({});

MainNavigation.args = {
  "modifier": '',
  "link_modifier": 'text-dark',
  "site_logo": "./images/logo.svg",
  "items": [
    {
      "title": "Menu Item 1",
      "url": "#",
      "is_expanded": true,
      "below": [
        {
          "title": "Vestibulum ac diam",
          "url": "#"
        },
        {
          "title": "Mauris blandit aliquet",
          "active": true,
          "url": "#"
        },
        {
          "title": "Pellentesque in",
          "url": "#"
        }
      ]
    },
    {
      "title": "Menu Item 2",
      "url": "#",
      "is_expanded": true,
      "in_active_trail": true,
      "below": [
        {
          "title": "Vestibulum ac diam",
          "url": "#"
        },
        {
          "title": "Mauris blandit aliquet",
          "in_active_trail": true,
          "url": "#"
        }
      ]
    },
    {
      "title": "Menu Item 3",
      "url": "#"
    }
  ]
};
