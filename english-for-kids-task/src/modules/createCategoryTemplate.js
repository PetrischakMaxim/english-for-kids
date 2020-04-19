function createCategoryTemplate(titles, arrContent) {
  const template = document.querySelector('#card-category-template');
  const container = new DocumentFragment();

  titles.map((title, index) => {
    const category = template.content.cloneNode(true);
    category.querySelector('.card__image').src = arrContent[index][index].image;
    category.querySelector('.card').dataset.category = index;
    category.querySelector('.card__name').textContent = title;
    container.append(category);
    return category;
  });

  return container;
}

export default createCategoryTemplate;
