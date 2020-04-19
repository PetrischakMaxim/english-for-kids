function createCardsTemplate(data) {
  const template = document.querySelector('#card-template');
  const container = new DocumentFragment();

  data.map(card => {
    const cardWrapper = template.content.cloneNode(true);
    const { word, translation, image, audioSrc } = card;
    cardWrapper.querySelector('.card__image').src = image;
    cardWrapper.querySelector('audio').src = audioSrc;
    cardWrapper.querySelector('.card__name--eng').textContent = word;
    cardWrapper.querySelector('.card__name--rus').textContent = translation;
    container.append(cardWrapper);
    return cardWrapper;
  });
  return container;
}

export default createCardsTemplate;
