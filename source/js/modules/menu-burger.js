const burgerContainer = document.querySelector('[data-burger-container]');
const burgerButton = document.querySelector('[data-burger-button]');

const initMenuBurger = () => {
  if (burgerContainer && burgerButton) {
    burgerContainer.classList.remove('is-active');

    burgerButton.addEventListener('click', () => {
      burgerContainer.classList.toggle('is-active');
    });
  }
};

export {initMenuBurger};
