// backend/src/controllers/contactController.js
const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');

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

    res.status(201).json({
        message: 'Message sent successfully!',
        data: newMessage,
    });
});

module.exports = {
    submitContactForm,
};