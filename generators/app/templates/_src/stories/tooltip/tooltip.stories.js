import TooltipTemplate from "./tooltip.twig";
import "./tooltip.es6.js";

export default {
  title: "Messages/Tooltip",
};

export const Tooltip = TooltipTemplate.bind({});

Tooltip.play = async () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
};

Tooltip.args = {

};
