// const carouselSlides = document.querySelector('.carousel-slides');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const slideWidth = carouselSlides.clientWidth / 3; // Divide by the number of slides
//
// let slideIndex = 0;
//
// function showSlide(index) {
//   carouselSlides.style.left = `-${slideWidth * index}px`;
// }
//
// function nextSlide() {
//   slideIndex = (slideIndex + 1) % (carouselSlides.children.length / 3);
//   showSlide(slideIndex);
// }
//
// function prevSlide() {
//   slideIndex = (slideIndex - 1 + carouselSlides.children.length / 3) % (carouselSlides.children.length / 3);
//   showSlide(slideIndex);
// }
//
// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);
//
// // Optional: Auto-play the carousel
// // const autoPlayInterval = setInterval(nextSlide, 3000);
// //
// // // Pause auto-play when hovering over the carousel
// // carouselSlides.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
// //
// // // Resume auto-play when not hovering over the carousel
// // carouselSlides.addEventListener('mouseleave', () => autoPlayInterval = setInterval(nextSlide, 3000));
//
// // Initialize the carousel with the first slide
// showSlide(slideIndex);
