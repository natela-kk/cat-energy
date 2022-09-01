const toggleButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

toggleButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
})
