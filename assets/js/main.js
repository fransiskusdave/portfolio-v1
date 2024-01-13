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

// Email Js
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_8n6ds4c",
      "template_yjtel1j",
      "#contact-form",
      "KKKjq47m7XFKiL9tD"
    )
    .then(
      () => {
        contactMessage.innerText = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.innerText = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.innerText = "Message not sent (service error) ❌";
      }
    );
});

// Scroll Up
window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
});

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollDown = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight
      ? sectionsClass.classList.add("active-link")
      : sectionsClass.classList.remove("active-link");
  });
});

// Dark Mode
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-fill";

const selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-fill" : "ri-sun-fill";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "ri-moon-fill" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__profil, .about__image, .contact__mail", { origin: "right" });
sr.reveal(
  ".home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data",
  { origin: "left" }
);
sr.reveal(".services__card, .projects__card", { interval: 100 });
