import "./gallery-lightbox.scss";
import GalleryLightboxTemplate from "./gallery-lightbox.twig";

export default {
  title: "Editorial/Gallery",
  argTypes: {
    "section_title": {
      description: "The title of the gallery lightbox component",
      control: "text",
    },
    "intro_title": {
      description: "Optional intro text for the gallery lightbox component",
      control: "text",
    },
    "items": {
      description: "Define the array of gallery lightbox items",
      control: "array",
      type: {
        required: true,
      },
    },
  },
};

export const Gallery = GalleryLightboxTemplate.bind({});

Gallery.args = {
  "section_title": "Optional Title",
  "intro_text": "<p>Optional summary text, turpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Curabitur imperdiet sapien libero, fringilla ullamcorper nibh ullamcorper vitae. Proin sed luctus augue.</p>",
  "items": [
    {
      "id": "exampleLightbox1",
      "media": '<img src="./images/gallery1.jpg" width="100%" alt="Gallery 1"/>',
      "media_thumb": '<img src="./images/gallery1--thumb.jpg" class="img-fluid" alt="Gallery 1"/>',
      "media_description": "Surfing photo 1 here!"
    },
    {
      "id": "exampleLightbox2",
      "media": '<img src="./images/gallery2.jpg" width="100%" alt="Gallery 2"/>',
      "media_thumb": '<img src="./images/gallery2--thumb.jpg" class="img-fluid" alt="Gallery 2"/>',
      "media_description": "Surfing photo 2 here!"
    },
    {
      "id": "exampleLightbox3",
      "media": '<img src="./images/gallery3.jpg" width="100%" alt="Gallery 3"/>',
      "media_thumb": '<img src="./images/gallery3--thumb.jpg" class="img-fluid" alt="Gallery 3"/>',
      "media_description": "Surfing photo 3 here!"
    },
    {
      "id": "exampleLightbox4",
      "media": '<img src="./images/gallery4.jpg" width="100%" alt="Gallery 4"/>',
      "media_thumb": '<img src="./images/gallery4--thumb.jpg" class="img-fluid" alt="Gallery 4"/>',
      "media_description": "Surfing photo 4 here!"
    },
    {
      "id": "exampleLightbox5",
      "media": '<img src="./images/gallery5.jpg" width="100%" alt="Gallery 5"/>',
      "media_thumb": '<img src="./images/gallery5--thumb.jpg" class="img-fluid" alt="Gallery 5"/>',
      "media_description": "Surfing photo 5 here!"
    },
    {
      "id": "exampleLightbox6",
      "media": '<img src="./images/gallery6.jpg" width="100%" alt="Gallery 6"/>',
      "media_thumb": '<img src="./images/gallery6--thumb.jpg" class="img-fluid" alt="Gallery 6"/>',
      "media_description": "Surfing photo 6 here!"
    },
    {
      "id": "exampleLightbox7",
      "media": '<img src="./images/gallery7.jpg" width="100%" alt="Gallery 7"/>',
      "media_thumb": '<img src="./images/gallery7--thumb.jpg" class="img-fluid" alt="Gallery 7"/>',
      "media_description": "Surfing photo 7 here!"
    },
    {
      "id": "exampleLightbox8",
      "media": '<img src="./images/gallery8.jpg" width="100%" alt="Gallery 8"/>',
      "media_thumb": '<img src="./images/gallery8--thumb.jpg" class="img-fluid" alt="Gallery 8"/>',
      "media_description": "Surfing photo 8 here!"
    }
  ]
};
