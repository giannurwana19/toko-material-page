document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1500,
    once: true,
  });
  const carousel = document.querySelector('.carousel-item');
  carousel.classList.add('active');
});
