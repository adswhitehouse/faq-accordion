// Variables
const answers = document.querySelectorAll(".jsAnswer");
const answerToggles = document.querySelectorAll(".jsAnswerToggle");

// Clicking on the FAQ question div toggles the answer visibility and image
answerToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.nextElementSibling.classList.toggle("show-answer");
    const icon = toggle.querySelector("img");
    icon.src.includes("icon-plus.svg")
      ? (icon.src = "./images/icon-minus.svg")
      : (icon.src = "./images/icon-plus.svg");
  });
});
