const dropdown_menu = document.querySelector('.dropdown_menu')
const nav = document.querySelector('.nav-links')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    dropdown_menu.classList.toggle('toggle')
}

dropdown_menu.addEventListener('click', toggleMenu)