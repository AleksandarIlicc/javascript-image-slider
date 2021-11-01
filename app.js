'use strict';

const slider = document.querySelector('.slider');
const slides = [...document.querySelectorAll('.slide')];
const items = [...document.querySelectorAll('.item')];
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const maxSlide = slides.length;
let slide = 0;

const goToSlide = function (slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;

    })
}

const activeImage = function (slide) {
    items.forEach(item => item.classList.remove('active'));
    items[slide].classList.add('active');
}

const prevSlide = function () {
    if (slide === 0) {
        slide = maxSlide - 1;
    } else {
        slide--;
    }
    goToSlide(slide);
    activeImage(slide);
}

const nextSlide = function () {
    if (slide === maxSlide - 1) {
        slide = 0;
    } else {
        slide++;
    }
    goToSlide(slide);
    activeImage(slide);
}

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

const init = function () {
    goToSlide(0);
    activeImage(0);
}
init();