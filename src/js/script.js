'use strict';

//slider
const slides = document.querySelectorAll('.prices__block'),
  prev = document.querySelector('.prices__button-prev'),
  next = document.querySelector('.prices__button-next');

let index = 1;

const updateSlider = (n) => {
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index - 1].style.display = 'block';
};
updateSlider(index);

const changeSlide = (n) => {
  index += n;
  updateSlider(index);
};

prev.addEventListener('click', () => {
  changeSlide(-1);
});
next.addEventListener('click', () => {
  changeSlide(1);
});
