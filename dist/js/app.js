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

window.addEventListener("load", function () {
  const codeIntro = document.querySelector(".code-intro");
  const imageIntro = document.querySelector(".image-intro");

  codeIntro?.classList.add("animate");
  imageIntro?.classList.add("animate");
});
