import "./teaser.scss";
import TeaserTemplate from "./teaser.twig";

export default {
  title: "Editorial/50-50 Teaser",
  argTypes: {
    title: {
      description: "Teaser title",
      control: "text",
    },
    authored_date: {
      description: "Teaser authored date",
      control: "text",
    },
    image: {
      description: "Teaser image markup",
      control: "text",
    },
    summary: {
      description: "Teaser summary",
      control: "text",
    },
    link: {
      description: "Teaser read more link",
      control: "text",
    },
    layout: {
      description: "Teaser layout",
      control: "text",
    },
    modifer: {
      description: "Teaser modifier",
      control: "text",
    },
  },
};

export const Left = TeaserTemplate.bind({});
Left.args = {
  "title": 'News Title',
  'eyebrow': 'Eyebrow',
  "image": "<img src='https://via.placeholder.com/800x600.png' class='img-fluid rounded' alt='Placeholder' />",
  "summary": 'Contra legem facit qui id facit quod lex prohibet. Nec dubitamus multa iter quae et nos invenerat. Praeterea iter est quasdam res quas ex communi. Lorem ipsum dolor sit amet, consectetur adipisici elit.',
  "link": {
    "url": "#",
    "text":"Read More",
    "modifier": "btn-primary"
  },
  "layout": "left",
  "modifier": "container-fluid rounded",
};

export const Right = TeaserTemplate.bind({});
Right.args = {
  "title": 'News Title',
  'eyebrow': 'Eyebrow',
  "image": "<img src='https://via.placeholder.com/800x600.png' class='img-fluid rounded' alt='Placeholder' />",
  "summary": 'Contra legem facit qui id facit quod lex prohibet. Nec dubitamus multa iter quae et nos invenerat. Praeterea iter est quasdam res quas ex communi. Lorem ipsum dolor sit amet, consectetur adipisici elit.',
  "link": {
    "url": "#",
    "text":"Read More",
    "modifier": "btn-primary"
  },
  "layout": "right",
  "modifier": "container-fluid rounded",
};
