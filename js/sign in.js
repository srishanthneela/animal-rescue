const Animal_Lover_btn = document.querySelector("#Animal-Lover-btn");
const Animal_Rescue_btn = document.querySelector("#Animal-Rescue-btn");
const container = document.querySelector(".container");

Animal_Rescue_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

Animal_Lover_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
