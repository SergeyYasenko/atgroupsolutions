// Hamburger

const fullScreenInfoRow = document.querySelector('.main-content');
const fullScreenInfo = document.querySelector('.header__menu-nav');
const burgerMenu = document.querySelector('.header__burger-btn');
const burgerMenuClose = document.querySelector('.header__burger-close');
if (burgerMenu) {
   burgerMenu.addEventListener("click", function (e) {
      document.body.classList.add('js-lock');
      fullScreenInfoRow.classList.add('js-is-active');
      fullScreenInfo.classList.add('js-is-active');
   });
}
if (burgerMenuClose) {
   burgerMenuClose.addEventListener("click", function (e) {
      document.body.classList.remove('js-lock');
      fullScreenInfoRow.classList.remove('js-is-active');
      fullScreenInfo.classList.remove('js-is-active');
   });
}