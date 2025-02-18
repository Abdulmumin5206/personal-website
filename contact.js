document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-btn");
    const buttonText = document.getElementById("btn-text");
    const buttonLoader = document.getElementById("btn-loader");
    const successPopup = document.getElementById("success-popup");

    if (!contactForm) {
        console.error("⚠️ Contact form not found in the DOM!");
        return;
    }

    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Show loader animation
        sendButton.classList.add("sending");
        buttonText.style.display = "none";
        buttonLoader.style.display = "inline-block";

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("⚠️ Please fill out all fields before submitting.");
            resetButton();
            return;
        }

        try {
            const response = await fetch("https://personal-website-backend-3u2h.onrender.com/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) throw new Error("Failed to send message!");

            const result = await response.json();

            if (result.message === "Email sent successfully!") {
                showSuccessPopup();
                contactForm.reset();
            }
        } catch (error) {
            alert("❌ Error sending message! Try again.");
            console.error("Error:", error);
        } finally {
            resetButton();
        }
    });

    // Show success popup
    function showSuccessPopup() {
        successPopup.classList.add("show");
        setTimeout(() => {
            successPopup.classList.remove("show");
        }, 3000);
    }

    // Reset button state
    function resetButton() {
        sendButton.classList.remove("sending");
        buttonText.style.display = "block";
        buttonLoader.style.display = "none";
    }
});
