import {ScrollLock} from '../utils/scroll-lock';

const burgerContainer = document.querySelector('[data-burger-container]');
const burgerButton = document.querySelector('[data-burger-button]');
const links = burgerContainer.querySelectorAll('a');
const scrollLock = new ScrollLock();

const activate = () => {
  burgerContainer.classList.add('is-active');
  scrollLock.disableScrolling();
  burgerButton.removeEventListener('click', onButtonCLick);
  document.body.addEventListener('click', onBodyClick);
  window.scrollTo(0, 0);
};

const deactivate = () => {
  burgerContainer.classList.remove('is-active');
  scrollLock.enableScrolling();
  document.body.removeEventListener('click', onBodyClick);
  burgerButton.addEventListener('click', onButtonCLick);
};

const onButtonCLick = (event) => {
  activate();
  event.stopPropagation();
};

const onBodyClick = (event) => {
  const isButton = burgerButton.contains(event.target);
  const isLink = Array.from(links).some((item) => (item.contains(event.target)));
  if (isButton || isLink) {
    deactivate();
  }
  if (!burgerContainer.contains(event.target)) {
    deactivate();
  }
};

const initMenu = () => {
  if (burgerContainer && burgerButton) {
    burgerContainer.classList.remove('is-active');
    burgerButton.addEventListener('click', onButtonCLick);
  }
};

export {initMenu};
