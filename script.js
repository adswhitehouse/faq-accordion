// Variables
let answers = document.querySelectorAll(".jsAnswer");
let answerToggles = document.querySelectorAll(".jsAnswerToggle");

answerToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.nextElementSibling.classList.toggle("show-answer");
    toggle.src.includes("icon-plus.svg")
      ? (toggle.src = "./images/icon-minus.svg")
      : (toggle.src = "./images/icon-plus.svg");
  });
});
