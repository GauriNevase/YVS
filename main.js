var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector('.navbar');
var navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("shadow-lg")
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      hamburger.classList.toggle("is-active");
      $('.navbar-collapse').removeClass('show')
    })
  })