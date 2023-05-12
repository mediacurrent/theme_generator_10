import "./hero.scss";
import HeroTemplate from "./hero.twig";

export default {
  title: "Editorial/Hero",
  argTypes: {
  },
};

export const Hero = HeroTemplate.bind({});
Hero.args = {
  "modifier": "bg-dark text-light",
  "image": "<img src='https://via.placeholder.com/1024x576.png' class='card-img rounded' alt='test image' />",
  "eyebrow": "Ignite",
  "heading": {
    "title": "Shortcut your design and development",
    "level": "2",
    "modifier": "display-3 fw-bold"
  },
  "body": {
    "body_text": "<p>Quickly design and customize responsive mobile-first sites with Bootstrap.</p>",
    "modifier": "mb-3 fs-5"
  },
  "button": {
    "text": "Learn more",
    "url": "#",
    "modifier": "btn-primary",
    "icon": 'arrow_right_alt'
  },
  "layout": "overlay",
};

export const HeroImageTop = HeroTemplate.bind({});
HeroImageTop.args = {
  "modifier": "text-dark",
  "image": "<img src='https://via.placeholder.com/1024x576.png' class='card-img rounded' alt='test image' />",
  "eyebrow": "Ignite",
  "heading": {
    "title": "<strong>Shortcut</strong> your <strong>design</strong> and <strong>development</strong> with our website starter kit",
    "level": "2",
    "modifier": "display-3 fw-bold"
  },
  "body": {
    "body_text": "<p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>",
    "modifier": "text-dark mb-3"
  },
  "button": {
    "text": "Learn more",
    "url": "#",
    "modifier": "btn-primary",
    "icon": 'arrow_right_alt'
  },
  "layout": "image_top",
};

export const HeroImageBottom = HeroTemplate.bind({});
HeroImageBottom.args = {
  "modifier": "text-dark border-0",
  "image": "<img src='https://via.placeholder.com/1024x576.png' class='card-img rounded' alt='test image' />",
  "eyebrow": "Ignite",
  "heading": {
    "title": "<strong>Shortcut</strong> your <strong>design</strong> and <strong>development</strong> with our website starter kit",
    "level": "2",
    "modifier": "display-3 fw-bold text-dark mb-4"
  },
  "body": { },
  "button": {
    "text": "Learn more",
    "url": "#",
    "modifier": "btn-primary",
    "icon": 'arrow_right_alt'
  },
  "layout": "image_bottom",
};

export const HeroImageRight = HeroTemplate.bind({});
HeroImageRight.args = {
  "modifier": "text-dark border-0",
  "image": "<img src='https://via.placeholder.com/717x781.png' class='card-img rounded' alt='test image' />",
  "eyebrow": "Features",
  "heading": {
    "title": "We got your <strong>website</strong> and <strong>design system</strong> project covered",
    "level": "2",
    "modifier": "display-3 fw-bold text-dark"
  },
  "body": {
    "body_text": "<p>Lorem ipsum dolor sit amet consectetur. Congue vel sagittis eu ullamcorper vel. Et et dui est ante tempor egestas pellentesque odio. Ornare erat lacus commodo porttitor ut enim. Ultricies mauris blandit in fermentum fringilla mollis risus ut. Nam eget eu suspendisse ut fermentum nascetur pretium lectus. Odio amet amet nam viverra hendrerit diam et. Nibh nunc in senectus odio tempor vitae id. Sit ut sit porta nisl enim.</p>",
    "modifier": "mb-3"
  },
  "button": {
    "text": "See feature list",
    "url": "#",
    "modifier": "btn-primary",
    "icon": 'arrow_right_alt'
  },
  "layout": "image_right",
};

export const HeroImageLeft = HeroTemplate.bind({});
HeroImageLeft.args = {
  "modifier": "text-dark border-0",
  "image": "<img src='https://via.placeholder.com/717x781.png' class='card-img rounded' alt='test image' />",
  "eyebrow": "Features",
  "heading": {
    "title": "We got your <strong>website</strong> and <strong>design system</strong> project covered",
    "level": "2",
    "modifier": "display-3 fw-bold text-dark"
  },
  "body": {
    "body_text": "<p>Lorem ipsum dolor sit amet consectetur. Congue vel sagittis eu ullamcorper vel. Et et dui est ante tempor egestas pellentesque odio. Ornare erat lacus commodo porttitor ut enim. Ultricies mauris blandit in fermentum fringilla mollis risus ut. Nam eget eu suspendisse ut fermentum nascetur pretium lectus. Odio amet amet nam viverra hendrerit diam et. Nibh nunc in senectus odio tempor vitae id. Sit ut sit porta nisl enim.</p>",
    "modifier": "mb-3"
  },
  "button": {
    "text": "See feature list",
    "url": "#",
    "modifier": "btn-primary",
    "icon": 'arrow_right_alt'
  },
  "layout": "image_left",
};
