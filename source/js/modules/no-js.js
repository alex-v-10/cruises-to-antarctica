const noJsElements = document.querySelectorAll('.no-js');

export const initNoJs = () => {
  if (noJsElements.length) {
    for (const element of noJsElements) {
      element.classList.remove('no-js');
    }
  }
};
