import "./sidebar.scss";
import SidebarTemplate from "./sidebar.twig";

export default {
  title: "Navigation/Sidebar",
};

export const Sidebar = SidebarTemplate.bind({});
Sidebar.args = {
  "items": [
    {
      "text": "Link 1",
      "url": "#"
    },
    {
      "text": "Link 2",
      "url": "#"
    },
    {
      "text": "Link 3",
      "url": "#"
    }
  ]
};
