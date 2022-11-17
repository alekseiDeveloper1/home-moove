'use strict';

//slider
// imperative
// const slides = document.querySelectorAll('.prices__block'),
//   prev = document.querySelector('.prices__button-prev'),
//   next = document.querySelector('.prices__button-next');

// let index = 1;

// const updateSlider = (n) => {
//   if (n > slides.length) {
//     index = 1;
//   }
//   if (n < 1) {
//     index = slides.length;
//   }
//   slides.forEach((slide) => slide.style.display = 'none');
//   slides[index - 1].style.display = 'block';
// };
// updateSlider(index);

// const changeSlide = (n) => {
//   index += n;
//   updateSlider(index);
// };

// prev.addEventListener('click', () => {
//   changeSlide(-1);
// });
// next.addEventListener('click', () => {
//   changeSlide(1);
// });

// func obj

// const slides = document.querySelectorAll('.prices__block'),
//   prev = document.querySelector('.prices__button-prev'),
//   next = document.querySelector('.prices__button-next');

// const Slider = (slides, prev, next, index = 1) => ({
//   slides, prev, next, index,
//   updateSlider(n) {
//     if (n > this.slides.length) {
//       this.index = 1;
//     }
//     if (n < 1) {
//       this.index = this.slides.length;
//     }
//     this.slides.forEach((slide) => slide.style.display = 'none');
//     this.slides[this.index - 1].style.display = 'block';
//   },
//   changeSlide(n) {
//     this.index += n;
//     this.updateSlider(this.index);
//   },
//   emit() {
//     this.prev.addEventListener('click', () => this.changeSlide(-1));
//     this.next.addEventListener('click', () => this.changeSlide(1));
//   }
// });
// const newSlider = Slider(slides, prev, next);
// newSlider.updateSlider(1);
// newSlider.emit();

// OOP

const slides = document.querySelectorAll('.prices__block'),
  prev = document.querySelector('.prices__button-prev'),
  next = document.querySelector('.prices__button-next');

const Slider = class {
  constructor(slides, prev, next, index = 1) {
    this.slides = slides;
    this.prev = prev;
    this.next = next;
    this.index = index;
  }
  updateSlider(n) {
    if (n > this.slides.length) {
      this.index = 1;
    }
    if (n < 1) {
      this.index = this.slides.length;
    }
    this.slides.forEach((slide) => slide.style.display = 'none');
    this.slides[this.index - 1].style.display = 'block';
  }
  changeSlide(n) {
    this.index += n;
    this.updateSlider(this.index);
  }
  emit() {
    this.prev.addEventListener('click', () => this.changeSlide(-1));
    this.next.addEventListener('click', () => this.changeSlide(1));
  }
};

const newSlider = new Slider(slides, prev, next);
newSlider.updateSlider(1);
newSlider.emit();

// tabs
const tabWrap = document.querySelector('.cars__tabs'),
  tabs        = document.querySelectorAll('.cars__tab'),
  carsBlocks  = document.querySelectorAll('.cars__block');

const hideBlocks = () => {
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  carsBlocks.forEach((block) => {
    block.classList.remove('active');
  });
};

const showBlock = (i = 0) => {
  hideBlocks();
  tabs[i].classList.add('active');
  carsBlocks[i].classList.add('active');
};
showBlock();

tabWrap.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.classList.contains('cars__tab')) {
    tabs.forEach((tab, index) => {
      if (tab === target) {
        showBlock(index);
      }
    });
  }
});

// Render

const processBlocks = document.querySelector('.process__blocks');



const render = (data) => {
  data.map((item) => {
    const element = document.createElement('div');
    element.classList.add('process__block', 'block-process');
    element.innerHTML = `
      <img src="${item.img}" alt="three" class="block-process__img">
      <div class="block-process__wrap">
          <div class="block-process__title">${item.title}</div>
          <div class="block-process__desc">${item.desc}</div>
      </div>
    `;
    processBlocks.append(element);
  });
};

fetch('http://localhost:3000/data')
  .then((data) => data.json())
  .then((res) => render(res));
