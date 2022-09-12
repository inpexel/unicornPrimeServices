(function(){
    const nav = document.querySelector("nav");
const toggler = document.querySelector(".toggler img");
const navLink = document.querySelectorAll(".nav-navigation a");

function navToggle(){
    nav.classList.toggle("nav-expended");
}

toggler.addEventListener('click', navToggle);



function toggleNavBackground(){
    let scrollValue = window.scrollY;
    if(scrollValue > 200){
        nav.classList.add('navigation');
    }
    if(scrollValue < 200){
        nav.classList.remove('navigation')
    }
}

window.addEventListener('scroll', toggleNavBackground);
})()