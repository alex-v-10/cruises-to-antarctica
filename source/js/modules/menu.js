import {ScrollLock} from '../utils/scroll-lock';

const burgerContainer = document.querySelector('[data-burger-container]');
const burgerButton = document.querySelector('[data-burger-button]');
const scrollLock = new ScrollLock();

const initMenu = () => {
  if (burgerContainer && burgerButton) {
    burgerContainer.classList.remove('no-js', 'is-active');

    burgerButton.addEventListener('click', () => {
      burgerContainer.classList.toggle('is-active');
      if (burgerContainer.classList.contains('is-active')) {
        scrollLock.disableScrolling();
      } else {
        scrollLock.enableScrolling();
      }
      window.scrollTo(0, 0);
    });
  }
};

export {initMenu};
