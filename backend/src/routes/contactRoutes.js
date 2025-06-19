// backend/src/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

router.route('/')
    .post(submitContactForm); // This means POST to /api/contact

module.exports = router;