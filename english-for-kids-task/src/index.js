import cardsData from './modules/cardsData';
import createCategoryTemplate from './modules/createCategoryTemplate';
import createCardsTemplate from './modules/createCardsTemplate';

const [categories, ...cards] = cardsData;
const root = document.querySelector('#root');
const loader = root.querySelector('.loader');

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

root.addEventListener('click', evt => {
  const currentTarget = evt.target;
  if (currentTarget.dataset.category) {
    root.querySelectorAll('.category').forEach(el => el.remove());
    setTimeout(toggleLoader, 0);
    setTimeout(() => {
      root.append(createCardsTemplate(cards[currentTarget.dataset.category]));
    }, 100);
    setTimeout(toggleLoader, 1000);
  }
  if (currentTarget.classList.contains('card__toggler')) {
    currentTarget.closest('.card').classList.add('is-clicked');
    setTimeout(() => {
      currentTarget.closest('.card').classList.remove('is-clicked');
    }, 1500);
  }
  if (currentTarget.classList.contains('card--item')) {
    currentTarget.querySelector('audio').play();
  }
});
