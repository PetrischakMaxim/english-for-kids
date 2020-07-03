export default function flipCard(el, stateClass, cardSelector, delay) {
  el.closest(cardSelector).classList.add(stateClass);
  el.closest(cardSelector).addEventListener(
    'transitionend',
    function() {
      setTimeout(() => {
        this.classList.remove(stateClass);
      }, delay);
    },
    { once: true }
  );
}
