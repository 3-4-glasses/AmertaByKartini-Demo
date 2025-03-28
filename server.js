import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Parse JSON requests


// setup 
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API Route to Send Email
app.post("/send-email", upload.array("attachments"), async (req, res) => {
    try {
        const { email, message } = req.body;
        const files = req.files;

        if (!email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.EMAIL_PASS
            }
        });

        const attachments = files.map(file => ({
            filename: file.originalname,
            content: file.buffer,
        }));

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL, // Recipient email
            subject: "Email notification from website", // Edit here im nto cretive
            text: message,
            replyTo: email,
            attachments
        };
        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent Response:", info); 
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: error.message || "Failed to send email" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));