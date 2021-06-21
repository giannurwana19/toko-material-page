document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1500,
    once: false,
  });

  const carousel = document.querySelector('.carousel-item');
  carousel.classList.add('active');
});
