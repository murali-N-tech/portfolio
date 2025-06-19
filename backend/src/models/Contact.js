// backend/src/models/Contact.js
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        subject: {
            type: String,
        },
        message: {
            type: String,
            required: [true, 'Please add a message'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Contact', contactSchema);