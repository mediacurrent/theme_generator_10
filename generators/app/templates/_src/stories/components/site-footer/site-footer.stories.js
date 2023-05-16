import "./site-footer.scss";
import SiteFooterTemplate from "./site-footer.twig";

export default {
  title: "General/Site Footer",
  argTypes: {
    social_icons: {
      description: "Define the social icons",
      control: "object",
    },
    links: {
      description: "Define the links",
      control: "object",
    },
    logo_style: {
      description: "Define the logo style",
      control: "select",
      options: ["logo-light", "logo-dark"],
    },
    site_logo: {
      description: "Define the site logo",
      control: "text",
    },
    modifier: {
      description: "Define the modifier",
      control: "text",
    },
    menu_modifier: {
      description: "Define the menu modifier",
      control: "text",
    }
  },
};

export const SiteFooter = SiteFooterTemplate.bind({});

SiteFooter.args = {
  "site_logo": "./images/logo-footer.svg",
  "modifier": "bg-black",
  "menu_modifier": "d-lg-flex justify-content-lg-end",
  "logo_style": "logo-light",
  "social_icons": {
    "facebook_url": "https://www.facebook.com/",
    "twitter_url": "https://www.twitter.com/",
    "youtube_url": "https://www.youtube.com/",
    "instagram_url": "https://www.instagram.com/",
    "style": "social-icon-dark",
    "modifier": "justify-content-lg-end d-lg-flex",
  },
  "link_item_modifier": "",
  "links": [
    {
      "title": "Privacy Policy",
      "url": "#",
    },
    {
      "title": "Terms of Use",
      "url": "#",
    },
    {
      "title": "Contact Us",
      "url": "#"
    }
  ]
};
