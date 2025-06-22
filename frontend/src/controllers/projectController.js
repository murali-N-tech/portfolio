// backend/src/controllers/projectController.js
const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find();
    res.status(200).json(projects);
});

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        res.status(404);
        throw new Error('Project not found');
    }
    res.status(200).json(project);
});

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private (e.g., for an admin user, or you can make it public for initial setup)
// For now, we'll keep it simple, but remember to add authentication later if you build an admin panel.
const createProject = asyncHandler(async (req, res) => {
    const { title, description, technologies, imageUrl, liveUrl, githubUrl, isFeatured } = req.body;

    // Basic validation
    if (!title || !description || !technologies) {
        res.status(400);
        throw new Error('Please add all required fields: title, description, technologies');
    }

    const project = await Project.create({
        title,
        description,
        technologies,
        imageUrl: imageUrl || '', // Default to empty string if not provided
        liveUrl: liveUrl || '',
        githubUrl: githubUrl || '',
        isFeatured: isFeatured || false,
    });

    res.status(201).json(project);
});

// You can add updateProject and deleteProject later if needed for an admin panel

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    // export updateProject, deleteProject if you implement them
};