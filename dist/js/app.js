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
  const codeIntro = document.querySelector(".code-intro");
  const imageIntro = document.querySelector(".image-intro");

  // Always make visible
  codeIntro?.classList.remove("hidden-slide");
  imageIntro?.classList.remove("hidden-slide");

  // Animate only if at top of page
  if (window.scrollY < 50) {
    codeIntro?.classList.add("slide-left");
    imageIntro?.classList.add("slide-right");
  }
});

