const cards = document.querySelectorAll('.card');

const initCards = () => {
  if (cards) {
    for (const card of cards) {
      const caption = card.querySelector('caption');
      const cardBg = card.querySelector('.card__background');
      if (caption && cardBg) {
        const cardBgTitle = document.createElement('span');
        cardBgTitle.classList.add('card__background-title');
        cardBg.appendChild(cardBgTitle);
        cardBgTitle.innerText = caption.innerText;
      }
    }
  }
};

const catalog = document.querySelector('.catalog');

const initCatalog = () => {
  catalog.classList.remove('no-js');
  initCards();
};

export {initCatalog};
