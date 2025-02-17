document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const sendingPopup = document.getElementById("sending-popup");
    const successPopup = document.getElementById("success-popup");

    if (!form) {
        console.error("❌ Contact form not found!");
        return;
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // ✅ Prevents page reload

        // Show "Sending..." popup
        sendingPopup.style.display = "block";

        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };

        try {
            const response = await fetch("https://personal-website-backend-3u2h.onrender.com/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Hide sending popup, show success popup
                sendingPopup.style.display = "none";
                successPopup.style.display = "block";

                // Clear form fields
                this.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    successPopup.style.display = "none";
                }, 3000);
            } else {
                alert("Failed to send message. Please try again.");
                sendingPopup.style.display = "none";
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
            console.error(error);
            sendingPopup.style.display = "none";
        }
    });
});
