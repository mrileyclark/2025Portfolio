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

//animates on hero section only
// if (window.scrollY < 50) {
//   codeIntro.classList.add('animated');
//   imageIntro.classList.add('animated');
// }

window.addEventListener("load", function () {
  if (window.scrollY < 50) {
    const codeIntro = document.querySelector(".code-intro");
    const imageIntro = document.querySelector(".image-intro");

    codeIntro?.classList.add("slide-left");
    imageIntro?.classList.add("slide-right");
  }
});
