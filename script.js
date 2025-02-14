document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-desc");
    const modalLink = document.getElementById("modal-link");
    const darkModeToggle = document.getElementById("dark-mode-toggle"); // Dark Mode button

    const projectData = [
        {
            title: "Project 1",
            image: "images/project1.jpg",
            description: "This is a detailed description of Project 1.",
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "Project 2",
            image: "images/project2.jpg",
            description: "This is a detailed description of Project 2.",
            link: "https://github.com/yourusername/project2"
        },
        {
            title: "Project 3",
            image: "images/project3.jpg",
            description: "This is a detailed description of Project 3.",
            link: "https://github.com/yourusername/project3"
        }
    ];

    // Function to Open Modal
    window.openModal = function(index) {
        modal.style.display = "flex";
        modalTitle.textContent = projectData[index - 1].title;
        modalImg.src = projectData[index - 1].image;
        modalDesc.textContent = projectData[index - 1].description;
        modalLink.href = projectData[index - 1].link;

        // Apply Dark Mode to Modal if it's active
        if (document.body.classList.contains("dark-mode")) {
            modal.classList.add("dark-mode");
        } else {
            modal.classList.remove("dark-mode");
        }
    };

    // Function to Close Modal
    window.closeModal = function() {
        modal.style.display = "none";
    };

    // Close Modal when Clicking Outside
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Check if Dark Mode is Enabled on Page Load
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Toggle Dark Mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");

            // Save User Preference in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }

            // Apply Dark Mode to Modal if it's Open
            if (modal.style.display === "flex") {
                modal.classList.toggle("dark-mode", document.body.classList.contains("dark-mode"));
            }
        });
    }
});
