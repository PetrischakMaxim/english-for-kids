import cardsData from './cardsData';
import createCategoryTemplate from './createCategoryTemplate';

const [categories, ...cards] = cardsData;

export default function renderCategories(el, callback) {
  const categoryTemplate = createCategoryTemplate(categories, cards);
  el.append(categoryTemplate);
  setTimeout(callback, 1500);
}
