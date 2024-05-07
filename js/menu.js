const menu = document.querySelector('.header__menu');
const navbar = document.querySelector('.navbar');

function toggleMenuAndNavbar() {
    menu.classList.toggle('open');
    if (window.innerWidth <= 955) {
        navbar.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    }
}

menu.addEventListener('click', toggleMenuAndNavbar);
navbar.addEventListener('click', toggleMenuAndNavbar);
