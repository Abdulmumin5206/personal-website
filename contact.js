document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const sendingPopup = document.getElementById("sending-popup");
    const successPopup = document.getElementById("success-popup");
    const errorPopup = document.getElementById("error-popup");

    if (!contactForm) {
        console.error("⚠️ Form element not found!");
        return;
    }

    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Show "Sending..." popup
        sendingPopup.style.display = "block";

        try {
            const response = await fetch("https://personal-website-backend-3u2h.onrender.com/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            const result = await response.json();
            sendingPopup.style.display = "none"; // Hide sending popup

            if (response.ok) {
                successPopup.style.display = "block";
                contactForm.reset(); // Clear form after successful send
                setTimeout(() => { successPopup.style.display = "none"; }, 3000);
            } else {
                throw new Error(result.error || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            sendingPopup.style.display = "none"; // Hide sending popup
            errorPopup.style.display = "block";
            setTimeout(() => { errorPopup.style.display = "none"; }, 3000);
        }
    });
});
