// Button color toggle
const colorButton = document.getElementById("colorButton");
let isBlue = false;

colorButton.addEventListener("click", () => {
  if (isBlue) {
    colorButton.style.backgroundColor = "green";
    colorButton.style.color = "white";
  } else {
    colorButton.style.backgroundColor = "blue";
    colorButton.style.color = "white";
  }
  isBlue = !isBlue;
});

// Dynamic navigation menu toggle
const toggleMenu = document.getElementById("toggleMenu");
const navMenu = document.querySelector("#navMenu ul");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// Modal popup
const modal = document.getElementById("announcementModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
