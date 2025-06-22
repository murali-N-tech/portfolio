// models/Project.js
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        technologies: [{ type: String }], // Array of strings (e.g., "React", "Node.js")
        imageUrl: { type: String }, // URL to project image
        liveUrl: { type: String },
        githubUrl: { type: String },
        isFeatured: { type: Boolean, default: false },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

module.exports = mongoose.model('Project', projectSchema);