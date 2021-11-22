const hamburger = document.querySelector(".header-right > a");
const navMenu = document.querySelector(".hamburger-menu");
const hamburgerClose = document.querySelector(".close");

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle("active");
})

hamburgerClose.addEventListener('click', function() {
    navMenu.classList.remove("active");
})