const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SCHOOL_EMAIL,
        pass: process.env.SCHOOL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.SCHOOL_EMAIL,
      subject: "New Inquiry - Little Learningss",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Email failed", error });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
