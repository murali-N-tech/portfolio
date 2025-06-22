// backend/src/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { getProjects, getProjectById, createProject } = require('../controllers/projectController');

router.route('/')
    .get(getProjects)
    .post(createProject); // Added POST route

router.route('/:id')
    .get(getProjectById); // Added GET by ID route

module.exports = router;