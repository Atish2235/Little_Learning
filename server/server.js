const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const galleryRoutes = require("./routes/galleryRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded files (images/resumes)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* -----------------------------------------
   RESUME UPLOAD
----------------------------------------- */

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads/resumes");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "resume-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const uploadResume = multer({
  storage: resumeStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

/* -----------------------------------------
   CONTACT EMAIL API
----------------------------------------- */

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
    res.json({ success: false, message: "Email failed", error });
  }
});

/* -----------------------------------------
   CAREER FORM + RESUME UPLOAD
----------------------------------------- */

app.post(
  "/send-career-application",
  uploadResume.single("resume"),
  async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        position,
        location,
        education,
        cover,
      } = req.body;

      const resumeFile = req.file;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptionsToAdmin = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `New Career Application - ${position || "General Position"}`,
        html: `
          <h2>New Career Application Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Cover Letter:</strong><br>${cover}</p>
        `,
        attachments: resumeFile
          ? [{ filename: resumeFile.originalname, path: resumeFile.path }]
          : [],
      };

      await transporter.sendMail(mailOptionsToAdmin);

      const mailOptionsToApplicant = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Application Received",
        html: `<h2>Thank you for applying, ${fullName}!</h2>`,
      };

      await transporter.sendMail(mailOptionsToApplicant);

      res.status(200).json({ message: "Application submitted!" });
    } catch (error) {
      res.status(500).json({ message: "Failed", error });
    }
  }
);

/* -----------------------------------------
   GALLERY ROUTES
----------------------------------------- */

app.use("/api/gallery", galleryRoutes);

/* -----------------------------------------
   START SERVER
----------------------------------------- */

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
