document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("❌ Contact form not found!");
        return;
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // ✅ Prevents page reload

        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };

        const responseMessage = document.getElementById("response-message");
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.innerText = "Message Sent Successfully!";
        document.body.appendChild(popup);

        try {
            const response = await fetch("https://https://personal-website-backend-3u2h.onrender.com/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            responseMessage.innerText = result.message;

            // ✅ Show popup and remove after 3 seconds
            popup.classList.add("show");
            setTimeout(() => {
                popup.classList.remove("show");
                document.body.removeChild(popup);
            }, 3000);
        } catch (error) {
            responseMessage.innerText = "Failed to send message!";
        }
    });
});
