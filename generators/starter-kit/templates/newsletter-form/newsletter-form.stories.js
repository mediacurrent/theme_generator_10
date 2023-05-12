import "./newsletter-form.scss";
import NewsletterFormTemplate from "./newsletter-form.twig";

export default {
  title: "Editorial/NewsletterForm",
};

export const NewsletterForm = NewsletterFormTemplate.bind({});
NewsletterForm.args = {
  "modifier": "col-10 shadow rounded-4 bg-dark text-light p-5",
};
