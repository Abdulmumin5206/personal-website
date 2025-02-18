document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const modeIcon = document.getElementById("mode-icon");

    // Check if Dark Mode is Already Enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            modeIcon.classList.remove("fa-moon");
            modeIcon.classList.add("fa-sun");
            localStorage.setItem("darkMode", "enabled");
        } else {
            modeIcon.classList.remove("fa-sun");
            modeIcon.classList.add("fa-moon");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
