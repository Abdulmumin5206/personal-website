require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Important: Allows reading JSON request bodies

// ✅ Test Route (Check if backend is running)
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// ✅ Handle Contact Form Submission
app.post("/send", async (req, res) => {
    console.log("Received request:", req.body); // ✅ Debugging: Check if data is received

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, // ✅ Store email securely in .env
                pass: process.env.PASSWORD, // ✅ Use App Password
            },
        });

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
