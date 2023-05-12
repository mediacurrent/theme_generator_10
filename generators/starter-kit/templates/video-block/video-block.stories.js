import VideoBlockTemplate from "./video-block.twig";

export default {
  title: "Editorial/Video Block",
  argTypes: {
    video: {
      description: "Define the video embed",
      control: "text",
    },
    heading: {
      description: "Define the heading",
      control: "object",
    },
    modifier: {
      description: "Define the modifier class",
      control: "text",
    },
  },
};

export const VideoBlock = VideoBlockTemplate.bind({});

VideoBlock.args = {
  "modifier": "",
  "heading": {
    "title": "Title Lorem Ipsum Dolor",
    "level": "4",
    "modifier": "card-title"
  },
  "video": "<iframe width='560' height='315' src='https://www.youtube.com/embed/i4jiTZ76XPk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
  "summary_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
  "link": {
    "url": "#",
    "text":"Optional Link"
  }
};
