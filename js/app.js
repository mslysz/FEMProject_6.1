const menuList = document.querySelector('.navigation__list');
const burgerButton = document.querySelector('.burger-button');
const contactButton = document.querySelector('.navigation__button');

contactButton.addEventListener('click', () => {
  window.location.href = 'https://github.com/mslysz';
});

function toggleMenuClass() {
  if (window.innerWidth > 840) {
    menuList.classList.remove('active');
  }
}

burgerButton.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

window.addEventListener('resize', toggleMenuClass);

toggleMenuClass();
