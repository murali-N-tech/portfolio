    // backend/src/routes/certificateRoutes.js
    const express = require('express');
    const router = express.Router();
    const { getCertificates, getCertificateById, createCertificate } = require('../controllers/certificateController');

    router.route('/')
        .get(getCertificates)      // GET all certificates
        .post(createCertificate);  // POST a new certificate

    router.route('/:id')
        .get(getCertificateById);  // GET a single certificate by ID

    module.exports = router;
    