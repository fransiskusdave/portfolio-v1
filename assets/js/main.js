// Navbar Scroll Down
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// Shadow Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
});
