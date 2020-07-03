export default function createNavigation() {
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
