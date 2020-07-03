export default function appendCards(parent, cards, delay) {
  setTimeout(() => parent.append(cards), delay);
}
