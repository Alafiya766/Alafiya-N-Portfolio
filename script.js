// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// SCROLL REVEAL
const scrollElements = document.querySelectorAll(".scroll");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}


// NAVBAR CLICK (FAST REVEAL)
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", function () {

    navMenu.classList.remove("show");

    // reveal immediately
    requestAnimationFrame(() => {
      revealOnScroll();
    });
  });
});


// SCROLL EVENT
window.addEventListener("scroll", revealOnScroll);

// PAGE LOAD
window.addEventListener("load", revealOnScroll);