import "./social-icons.scss";
import SocialIconsTemplate from "./social-icons.twig";

export default {
  title: "General/Social Icons",
  argTypes: {
    social_icons: {
      description: "Define the social icons",
      control: "object",
    },
  },
};

export const SocialIcons = SocialIconsTemplate.bind({});

SocialIcons.args = {
  "social_icons": {
    "facebook_url": "https://www.facebook.com/",
    "twitter_url": "https://www.twitter.com/",
    "youtube_url": "https://www.youtube.com/",
    "instagram_url": "https://www.instagram.com/",
    "style": "social-icon-light",
    "modifier": "p-3 bg-light",
  },
};

export const SocialIconsDark = SocialIconsTemplate.bind({});

SocialIconsDark.args = {
  "social_icons": {
    "facebook_url": "https://www.facebook.com/",
    "twitter_url": "https://www.twitter.com/",
    "youtube_url": "https://www.youtube.com/",
    "instagram_url": "https://www.instagram.com/",
    "style": "social-icon-dark",
    "modifier": "p-3 bg-dark",
  },
};
