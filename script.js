const slides = document.querySelector('.slides');
const toño = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slideCount;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount;
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 600}px)`;
}

function comprar(modelo) {
  alert(`Has comprado el ${modelo}. ¡Gracias por tu compra te deseo!`);
}

