document.addEventListener("DOMContentLoaded", () => {
    // Click Me button
    const clickBtn = document.getElementById("clickMe");
    if (clickBtn) {
        clickBtn.addEventListener("click", () => {
            alert("Welcome To Percival Trucking!");
        });
    }

    // Toggle menu button
    const toggleBtn = document.getElementById("toggleMenu");
    const navMenu = document.getElementById("navMenu");
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Show announcement button
    const announcementBtn = document.getElementById("showAnnouncement");
    const announcementModal = document.getElementById("announcementModal");
    const closeBtn = document.getElementById("closeAnnouncement");

    if (announcementBtn && announcementModal) {
        announcementBtn.addEventListener("click", () => {
            announcementModal.style.display = "block";
        });
    }

    if (closeBtn && announcementModal) {
        closeBtn.addEventListener("click", () => {
            announcementModal.style.display = "none";
        });
    }
});
