let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.left-arrow').addEventListener('click', function() {
    changeSlide(-1);
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    changeSlide(1);
});

function changeSlide(direction) {
    if (direction === -1 && currentSlide > 0) {
        currentSlide--;
    } else if (direction === 1 && currentSlide < totalSlides - 1) {
        currentSlide++;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const sliderContainer = document.querySelector('.slides-container');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}