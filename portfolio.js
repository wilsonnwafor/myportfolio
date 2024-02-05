document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

const hamMenu = document.querySelector('.ham-menu');
const sidebar = document.querySelector('.sidebar');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('clicked');
  sidebar.classList.toggle('clickedul');
})