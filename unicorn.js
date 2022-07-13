const nav = document.querySelector("nav");
const toggler = document.querySelector(".toggler img");
const navLink = document.querySelectorAll(".nav-navigation a");

function navToggle(){
    nav.classList.toggle("nav-expended");
}

toggler.addEventListener('click', navToggle);
