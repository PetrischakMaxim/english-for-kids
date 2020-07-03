export default function enableCards(track, cards, stateClass) {
  track.addEventListener('ended', () => {
    cards.forEach(
      card => {
        card.classList.remove(stateClass);
      },
      {
        once: true,
      }
    );
  });
}
