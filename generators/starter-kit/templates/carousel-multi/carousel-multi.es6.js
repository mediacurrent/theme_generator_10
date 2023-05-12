/**
 * @file
 * Behaviors for the Carousel (Multi).
 */
/* eslint-disable max-len */

(function (Drupal) {
  /**
   * Setup and attach the Carousel behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.carouselMulti = {
    attach: function () {
      // Get the left and right arrow elements.
      const leftArrow = document.querySelector('.carousel-prev');
      const rightArrow = document.querySelector('.carousel-next');

      // Define a function to handle moving the last list item to the beginning of the list.
      const moveLeft = (e) => {
        e.preventDefault();

        // Get the carousel element by carouselId.
        const carouselId = e.target.getAttribute('data-target');

        // Get the carousel element by carouselId.
        const listContainer = document.querySelector(`${carouselId}`);
        const lastItem = listContainer.lastElementChild;

        listContainer.classList.add('fade-effect');

        setTimeout(function () {
          listContainer.removeChild(lastItem);
          listContainer.insertBefore(lastItem, listContainer.firstElementChild);
          listContainer.classList.remove('fade-effect');
        }, 300);
      };

      // Define a function to handle moving the first list item to the end of the list.
      const moveRight = (e) => {
        e.preventDefault();

        // Get the carousel element by carouselId.
        const carouselId = e.target.getAttribute('data-target');

        // Get the carousel element by carouselId.
        const listContainer = document.querySelector(`${carouselId}`);
        const firstItem = listContainer.firstElementChild;

        // Fade out the first item.
        listContainer.classList.add('fade-effect');

        setTimeout(function () {
          listContainer.removeChild(firstItem);
          listContainer.appendChild(firstItem);
          listContainer.classList.remove('fade-effect');
        }, 300);
      };

      // Attach click event listeners to the arrow elements.
      leftArrow.addEventListener('click', moveLeft);
      rightArrow.addEventListener('click', moveRight);
    }
  };
})(Drupal);
