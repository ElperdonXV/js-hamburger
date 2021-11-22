const hamburger = document.querySelector(".header-right > a");
const navMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})