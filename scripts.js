let hamburger = document.getElementById('hamburger-icon-container')
let navbar = document.getElementById('navbar')
let nav_item_texts = document.getElementsByClassName("nav-item-text")
hamburger.addEventListener('click', e=>toggleNavbar())

function toggleNavbar() {
    navbar.classList.toggle('navbar-small')
    for(let nav_item_text of nav_item_texts){
        nav_item_text.classList.toggle('nav-item-text-small')
    }
}


window.addEventListener('DOMContentLoaded', event => {
})