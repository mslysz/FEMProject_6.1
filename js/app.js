const menuList = document.querySelector('.navigation__list');
const burgerButton = document.querySelector('.burger-button');

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
