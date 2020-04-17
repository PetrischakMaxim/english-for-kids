import cardsData from './modules/cardsData';

const [categories, ...cards] = cardsData;

function createCategoryTemplate() {
  const template = document.querySelector('#card-category-template');

  categories.map((elem, index) => {
    const category = template.content.cloneNode(true);
    const categoryTitle = elem;
    const categoryImage = cards[index][index].image;
    category.querySelector('.card__name').textContent = categoryTitle;
    category.querySelector('.card__image').src = categoryImage;
    template.append(category);
    return template;
  });

  return template;
}

const categoryTemplate = createCategoryTemplate();
console.log(categoryTemplate);
document.querySelector('#root').append(categoryTemplate);

/* document.querySelector('.card__toggler').addEventListener('click', function() {
  document.querySelector('.card ').classList.add('is-clicked');
  setTimeout(() => {
    document.querySelector('.card ').classList.remove('is-clicked');
  }, 1500);
});

document.querySelector('.card').addEventListener('click', function() {
  this.querySelector('audio').play();
});
 */
