export default function disableCards(cards, stateClass) {
  cards.forEach(card => {
    card.classList.add(stateClass);
  });
}
