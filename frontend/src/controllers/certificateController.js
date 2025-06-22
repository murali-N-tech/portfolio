    // backend/src/controllers/certificateController.js
    const asyncHandler = require('express-async-handler');
    const Certificate = require('../models/Certificate');

    // @desc    Get all certificates
    // @route   GET /api/certificates
    // @access  Public
    const getCertificates = asyncHandler(async (req, res) => {
        const certificates = await Certificate.find().sort({ issueDate: -1 }); // Sort by most recent first
        res.status(200).json(certificates);
    });

    // @desc    Get single certificate by ID
    // @route   GET /api/certificates/:id
    // @access  Public
    const getCertificateById = asyncHandler(async (req, res) => {
        const certificate = await Certificate.findById(req.params.id);

        if (!certificate) {
            res.status(404);
            throw new Error('Certificate not found');
        }
        res.status(200).json(certificate);
    });

    // @desc    Create a new certificate
    // @route   POST /api/certificates
    // @access  Private (for admin)
    const createCertificate = asyncHandler(async (req, res) => {
        const { title, issuingOrganization, issueDate, credentialId, credentialUrl, imageUrl, isFeatured } = req.body;

        // Basic validation
        if (!title || !issuingOrganization || !issueDate) {
            res.status(400);
            throw new Error('Please add all required fields: title, issuingOrganization, issueDate');
        }

        const certificate = await Certificate.create({
            title,
            issuingOrganization,
            issueDate,
            credentialId: credentialId || '',
            credentialUrl: credentialUrl || '',
            imageUrl: imageUrl || '',
            isFeatured: isFeatured || false,
        });

        res.status(201).json(certificate);
    });

    // You can add updateCertificate and deleteCertificate methods similarly if needed for an admin panel.

    module.exports = {
        getCertificates,
        getCertificateById,
        createCertificate,
    };
    