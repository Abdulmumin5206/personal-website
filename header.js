function loadHeader() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // ✅ Call dark mode setup AFTER header is inserted
            setupDarkMode();
        })
        .catch(error => console.error("Error loading header:", error));
}

// ✅ Ensure header loads first
document.addEventListener("DOMContentLoaded", loadHeader);

// ✅ Function to Setup Dark Mode Toggle
function setupDarkMode() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const modeIcon = document.getElementById("mode-icon");

    if (!darkModeToggle || !modeIcon) {
        console.error("⚠️ Dark mode button or icon not found!");
        return;
    }

    // ✅ Check if Dark Mode is Already Enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        modeIcon.src = "icons/dark.svg"; // Switch to dark mode icon
    }

    // ✅ Toggle Dark Mode on Click
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            modeIcon.src = "icons/dark.svg"; // 🌙 Switch to dark mode icon
            localStorage.setItem("darkMode", "enabled"); // ✅ Save user preference
        } else {
            modeIcon.src = "icons/light.svg"; // ☀️ Switch to light mode icon
            localStorage.setItem("darkMode", "disabled"); // ❌ Remove preference
        }
    });
}

// ✅ Fade-in animation for sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
