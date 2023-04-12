const cards = document.querySelectorAll('.card');

const initCards = () => {
  if (cards.length) {
    for (const card of cards) {
      card.tabIndex = 0;
      const caption = card.querySelector('caption');
      const cardBg = card.querySelector('.card__background');
      if (caption && cardBg) {
        const cardBgTitle = document.createElement('span');
        cardBgTitle.classList.add('card__background-title-js');
        cardBg.appendChild(cardBgTitle);
        cardBgTitle.innerText = caption.innerText;
      }
    }
  }
};

export {initCards};
