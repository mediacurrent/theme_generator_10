import "./quote.scss";
import QuoteTemplate from "./quote.twig";

export default {
  title: "Editorial/Quote",
  argTypes: {
    quote: {
      description: "Define the quote object",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Quote = QuoteTemplate.bind({});
Quote.args = {
  "quote": {
    "modifier_class": "",
    "logo": "<img src='https://via.placeholder.com/640x480.png' class='img-fluid' alt='Logod'/>",
    "quote": 'Mediacurrent provided a range of high caliber services including design, UX, development, and digital strategy that are helping us pivot and transform the insurance purchasing experience.',
    "image": "<img src='https://via.placeholder.com/640x480.png' class='img-fluid rounded-circle' alt='Photo of person quoted'/>",
    "name": "Peggy Maher",
    "job": "SVP, Direct to Consumer at Guardian Life Insurance",
    "layout": "left",
  }
};
