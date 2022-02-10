const scrollToTop = document.querySelector(".scroll-to-top");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", () => {
  window.pageYOffset < 100
    ? (scrollToTop.classList = "scroll-to-top scroll-hidden")
    : (scrollToTop.classList = "scroll-to-top scroll-visible");
});

const html = document.querySelector("html");

const responsiveNavbar = document.querySelector(".links-container-ul");

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const responsiveToggle = document.querySelector("#toggle");

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});

window.setTimeout(() => {
  const navbar = document.querySelector("nav");
  navbar.style.transform = "none";
  const home = document.querySelector(".home-container");
  home.style.transform = "none";
}, 1000);
