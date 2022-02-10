// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: 2000,
  reset: false,
  opacity: 1,
});

sr.reveal(
  `nav,
  .home-container,
  .image-container,
  .features,
  #service1,
  #service2,
  #service3,
  .pricing-plan,
  footer`,
  {
    opacity: 0,
    interval: 200,
  }
);
