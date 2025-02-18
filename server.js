require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// ✅ Allow CORS for your frontend domain
app.use(cors({
    origin: "https://abdulmumin5206.github.io/personal-website", // ✅ Change this to match your GitHub Pages URL
    methods: "POST",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());

// ✅ Test Route (Check if backend is running)
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// ✅ Handle Contact Form Submission
app.post("/send", async (req, res) => {
    console.log("Received request:", req.body); 

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
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD, 
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
