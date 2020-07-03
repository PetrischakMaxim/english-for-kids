import appendCards from './modules/appendCards';
import cardsData from './modules/cardsData';
import createCardsTemplate from './modules/createCardsTemplate';
import createNavigation from './modules/createNavigation';
import disableCards from './modules/disableCards';
import enableCards from './modules/enableCards';
import flipCard from './modules/flipCard';
import playCardName from './modules/playCardName';
import renderCategories from './modules/renderCategories';
import toggleLoader from './modules/toggleLoader';
import toggleNavigation from './modules/toggleNavigation';

const options = {
  delay: 1000,
  visibleClass: 'show',
  disableClass: 'disabled',
};
const { delay, visibleClass, disableClass } = options;
const [, ...cards] = cardsData;
const root = document.querySelector('#root');
/* Run */
renderCategories(root, toggleLoader);
createNavigation();

/* Toggle navbar */
const navToggler = document.querySelector('.navbar-toggler');
const headerNav = document.querySelector('#navbarHeader');

navToggler.addEventListener('click', () =>
  toggleNavigation(headerNav, visibleClass)
);

document.body.addEventListener('click', evt => {
  const currentTarget = evt.target;
  /* Toggle state cards */
  if (currentTarget.dataset.category) {
    const newCategories = createCardsTemplate(
      cards[currentTarget.dataset.category]
    );
    toggleLoader();
    [...root.children].forEach(el => el.remove());
    appendCards(root, newCategories, delay);
    headerNav.classList.remove(visibleClass);
    setTimeout(toggleLoader, delay);
  }
  /* Flip cards */
  if (currentTarget.classList.contains('card__toggler')) {
    flipCard(currentTarget, 'is-clicked', '.card', delay);
  }
  /* Play track */
  if (currentTarget.classList.contains('card--item')) {
    const cells = root.querySelectorAll('.card');
    const currentTrack = currentTarget.querySelector('audio');
    disableCards(cells, disableClass);
    playCardName(currentTrack);
    enableCards(currentTrack, cells, disableClass);
  }
});
