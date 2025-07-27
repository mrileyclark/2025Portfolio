// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// clear form fields
function clearInputField() {
  document.getElementById('my-form').reset();
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.scrollY < 50) {
    const codeIntro = document.querySelector('.code-intro');
    const imageIntro = document.querySelector('.image-intro');

    if (codeIntro) {
      codeIntro.style.animation = 'fadeSlideIn 2.5s ease-out forwards';
    }

    if (imageIntro) {
      imageIntro.style.animation = 'fadeSlideIn 2.5s ease-out forwards';
      imageIntro.style.transform = 'translateX(150px)'; // Optional override for direction
    }
  }
});
