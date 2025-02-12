document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar ul li a");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Load Dark Mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Smooth Page Transitions
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        });
    });
});
