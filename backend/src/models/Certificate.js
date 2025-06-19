    // backend/src/models/Certificate.js
    const mongoose = require('mongoose');

    const certificateSchema = mongoose.Schema(
        {
            title: {
                type: String,
                required: [true, 'Please add a certificate title'],
            },
            issuingOrganization: {
                type: String,
                required: [true, 'Please add the issuing organization'],
            },
            issueDate: {
                type: Date,
                required: [true, 'Please add the issue date'],
            },
            credentialId: { // Optional: Unique ID or verification code for the certificate
                type: String,
            },
            credentialUrl: { // Optional: Link to verify the certificate online
                type: String,
            },
            imageUrl: { // Optional: Image of the certificate itself or a badge
                type: String,
            },
            isFeatured: { // Optional: To highlight certain certificates
                type: Boolean,
                default: false,
            },
        },
        {
            timestamps: true, // Adds createdAt and updatedAt fields automatically
        }
    );

    module.exports = mongoose.model('Certificate', certificateSchema);
    