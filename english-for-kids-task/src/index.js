import cardsData from './modules/cardsData';
import createCategoryTemplate from './modules/createCategoryTemplate';
import createCardsTemplate from './modules/createCardsTemplate';

const [categories, ...cards] = cardsData;
const root = document.querySelector('#root');
const loader = document.querySelector('.loader');

function toggleLoader() {
  loader.classList.toggle('hidden');
}

function renderCategories() {
  const categoryTemplate = createCategoryTemplate(categories, cards);
  root.append(categoryTemplate);
  setTimeout(toggleLoader, 1500);
}

function createNavigation() {
  const navigation = new DocumentFragment();
  const nav = document.createElement('nav');
  nav.classList.add('app__navigation');
  document.querySelectorAll('.card--category').forEach(card => {
    const link = document.createElement('a');
    link.dataset.category = card.dataset.category;
    link.textContent = card.querySelector('.card__name').textContent;
    nav.append(link);
  });
  navigation.append(nav);
  document.querySelector('#nav').append(navigation);
}

/* Run */
renderCategories();
createNavigation();

/* Toggle navbar */
const navToggler = document.querySelector('.navbar-toggler');
const headerNav = document.querySelector('#navbarHeader');
navToggler.addEventListener('click', () => headerNav.classList.toggle('show'));

document.body.addEventListener('click', evt => {
  const currentTarget = evt.target;

  /* Toggle state cards */
  if (currentTarget.dataset.category) {
    const stateClass = 'disabled';
    toggleLoader();
    currentTarget.classList.add(stateClass);
    Array.from(root.children).forEach(el => el.remove());
    setTimeout(() => {
      root.append(createCardsTemplate(cards[currentTarget.dataset.category]));
    }, 100);
    currentTarget.classList.remove(stateClass);
    headerNav.classList.remove('show');
    setTimeout(toggleLoader, 750);
  }
  /* Flip cards */
  if (currentTarget.classList.contains('card__toggler')) {
    const stateClass = 'is-clicked';
    const cardSelector = '.card';

    currentTarget.closest(cardSelector).classList.add(stateClass);
    setTimeout(
      () => currentTarget.closest(cardSelector).classList.remove(stateClass),
      1500
    );
  }
  /* Play track */
  if (currentTarget.classList.contains('card--item')) {
    currentTarget.querySelector('audio').play();
  }
});
