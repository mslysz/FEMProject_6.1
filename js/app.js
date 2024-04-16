const menuList = document.querySelector('.navigation__list');
document.querySelector('.burger-button').addEventListener('click', () => {
  menuList.classList.toggle('active');
});
