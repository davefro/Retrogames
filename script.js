let menu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelector('.navbar__menu');


// Display Mobile Menu
let mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', mobileMenu);
  

// Open window in new tab 

function NewTab(){
  window.open(
    "https://en.wikipedia.org/wiki/Retrogaming", "_blank"
  );
}

// Alert function 

function myFunction(){
  alert("Sign up!")
}
