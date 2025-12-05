const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.hero-section .swiper-button-next',
    prevEl: '.hero-section .swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});