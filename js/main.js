
// MOBILE NAVBAR

const navBurger = document.querySelector('#navBurger');
const navMenu = document.querySelector('#navMenu');

navBurger.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
  navBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const mobileNavLinks = document.querySelectorAll('.nav-link');

Array.from(mobileNavLinks).forEach(element => element.addEventListener('click', scrollToSection));

function scrollToSection() {
  navBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
