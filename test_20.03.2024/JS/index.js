window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".swiper-blog__swiper", {
    effect: "coverflow",
    allowTouchMove: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
});
