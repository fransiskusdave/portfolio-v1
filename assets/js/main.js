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
