// HAMBURGER MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Open / Close menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close menu when clicking a link
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

const scrollElements = document.querySelectorAll(".scroll");

const revealOnScroll = () => {
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load
