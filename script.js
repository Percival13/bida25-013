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

document.addEventListener("DOMContentLoaded", () => {
    // Click Me button
    const clickBtn = document.getElementById("clickMe");
    if (clickBtn) {
        clickBtn.addEventListener("click", () => {
            alert("You clicked the button!");
        });
    }

    // Toggle menu
    const toggleBtn = document.getElementById("toggleMenu");
    const navMenu = document.getElementById("navMenu");
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Show announcement
    const announcementBtn = document.getElementById("showAnnouncement");
    const announcementModal = document.getElementById("announcementModal");
    if (announcementBtn && announcementModal) {
        announcementBtn.addEventListener("click", () => {
            announcementModal.style.display = "block";
        });
    }
});
