// backend/src/server.js
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { errorHandler } = require('./middleware/errorHandler');

connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/contact', contactRoutes);

// Serve React frontend from frontend/build
app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
