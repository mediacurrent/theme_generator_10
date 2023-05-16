import InlineMenuTemplate from "./inline-menu.twig";

export default {
  title: "Navigation/InlineMenu",
};

export const InlineMenu = InlineMenuTemplate.bind({});
InlineMenu.args = {
  "items": [
    {
      "title": "Active",
      "url": "#",
      "active": true
    },
    {
      "title": "Link",
      "url": "#"
    },
    {
      "title": "Link",
      "url": "#"
    },
    {
      "title": "Disabled",
      "disabled": true
    }
  ]
};
