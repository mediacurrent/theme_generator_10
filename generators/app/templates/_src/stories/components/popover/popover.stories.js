import "./popover.scss";
import PopoverTemplate from "./popover.twig";
import "./popover.es6.js";

export default {
  title: "Messages/Popover",
};

export const Popover = PopoverTemplate.bind({});

Popover.play = async () => {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
};

Popover.args = {

};
