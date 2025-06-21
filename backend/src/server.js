// backend/src/server.js
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const contactRoutes = require('./routes/contactRoutes'); // <--- CRITICAL: Is this import present?
const { errorHandler } = require('./middleware/errorHandler');

connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware (must be before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/contact', contactRoutes); // <--- CRITICAL: Is this line present and correctly spelled?
// app.use('/api/skills', skillRoutes); // Placeholder

// Error handling middleware (should be last)
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));