'use strict'

window.onload = function () {
  const slider = document.querySelector(".slider");
  const photos = document.querySelectorAll(".photo");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  let touchStartX;
  let touchEndX;
  let isSwiping = false;

  function showSlide(index) {
    photos.forEach((photo, i) => {
      if (i === index) {
        photo.style.display = "block"; // Показать изображение
      } else {
        photo.style.display = "none"; // Скрыть остальные изображения
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % photos.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  slider.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
    isSwiping = true;
  });

  slider.addEventListener("touchend", (event) => {
    if (!isSwiping) return; // Если не произошел свайп
    touchEndX = event.changedTouches[0].clientX;

    // Определите направление свайпа
    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 50; // Порог для определения свайпа

    if (swipeDistance > swipeThreshold) {
      // Свайп влево - перейти к следующему слайду
      nextSlide();
    } else if (swipeDistance < -swipeThreshold) {
      // Свайп вправо - перейти к предыдущему слайду
      prevSlide();
    }

    isSwiping = false;
  });

  slider.addEventListener("touchmove", (event) => {
    if (isSwiping) {
      event.preventDefault();
    }
  });

  // Показать первый слайд при загрузке страницы
  showSlide(currentIndex);
};
// window.onload = function() {
//   const slider = document.querySelector(".slider");
//   const photos = document.querySelectorAll(".photo");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");
//   let currentIndex = 0;

//   function showSlide(index) {
//     photos.forEach((photo, i) => {
//       if (i === index) {
//         photo.style.display = "block"; // Показать изображение
//       } else {
//         photo.style.display = "none"; // Скрыть остальные изображения
//       }
//     });
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % photos.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + photos.length) % photos.length;
//     showSlide(currentIndex);
//   }

//   prevBtn.addEventListener("click", prevSlide);
//   nextBtn.addEventListener("click", nextSlide);

//   // Показать первый слайд при загрузке страницы
//   showSlide(currentIndex);
// };

console.debug
