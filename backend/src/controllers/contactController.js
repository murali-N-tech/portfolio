// backend/src/controllers/contactController.js
const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        res.status(400);
        throw new Error('Please fill in all required fields: Name, Email, and Message.');
    }

    const newMessage = await Contact.create({
        name,
        email,
        subject: subject || 'No Subject',
        message,
    });

    // Send email to admin
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: `Portfolio Contact Form: ${subject || 'No Subject'}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        // Optionally, you can return a different response or status here
    }

    res.status(201).json({
        message: 'Message sent successfully!',
        data: newMessage,
    });
});

module.exports = {
    submitContactForm,
};
