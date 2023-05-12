import "./stats.scss";
import StatsTemplate from "./stats.twig";

export default {
  title: "Editorial/Stats",
  argTypes: {
    title: {
      description: "Stats title",
      control: "text",
    },
    image: {
      description: "Stats image markup",
      control: "text",
    },
    summary: {
      description: "Stats summary",
      control: "text",
    },
    modifer: {
      description: "Stats modifier",
      control: "text",
    },
    stats: {
      description: "Stats list",
      control: "array",
    },
  },
};

export const Stats = StatsTemplate.bind({});
Stats.args = {
  "title": 'All the pieces you need to kickstart your site',
  'eyebrow': 'Eyebrow',
  "image": "<img src='https://via.placeholder.com/800x600.png' class='img-fluid rounded' alt='Placeholder' />",
  "summary": 'Use our customizable design system as a foundation and expand from there to meet your organization’s needs.',
  "modifier": "text-dark",
  "stats": [
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
  ]
};

export const StatsDark = StatsTemplate.bind({});
StatsDark.args = {
  "title": 'All the pieces you need to kickstart your site',
  'eyebrow': 'Eyebrow',
  "image": "<img src='https://via.placeholder.com/800x600.png' class='img-fluid rounded' alt='Placeholder' />",
  "summary": 'Use our customizable design system as a foundation and expand from there to meet your organization’s needs.',
  "modifier": "bg-black text-light",
  "heading_modifier": "text-light",
  "stats": [
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
    {
      "icon": '<span class="material-symbols-outlined">arrow_right_alt</span>',
      "title": "H3 Title",
      "summary": "Use our customizable design system as a foundation and expand from there to meet your organization’s needs.",
    },
  ]
};
