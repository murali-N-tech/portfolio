// backend/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./src/models/Project'); // Import your Project model

// Load environment variables from .env file
dotenv.config();

// Connect to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

// Sample project data
// You can customize this array with your actual project details
const sampleProjects = [
    {
        title: "Personal Portfolio Website (MERN)",
        description: "A comprehensive personal portfolio website showcasing my skills and projects, built with the MERN stack and a modern, responsive UI using Chakra UI.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chakra UI", "JavaScript", "HTML", "CSS"],
        imageUrl: "https://placehold.co/600x400/3182CE/FFFFFF?text=Portfolio+Site", // Placeholder image URL
        liveUrl: "https://your-portfolio-live-demo.com",
        githubUrl: "https://github.com/yourusername/your-portfolio-repo",
        isFeatured: true
    },
    {
        title: "E-commerce Product Catalog",
        description: "A simplified e-commerce platform demonstrating product listing, filtering, and detailed product views. Focus on clean UI and efficient data handling.",
        technologies: ["React", "Redux (basics)", "Node.js", "Express.js", "MongoDB", "REST API", "Styled Components"],
        imageUrl: "https://placehold.co/600x400/2C5282/FFFFFF?text=E-commerce+Catalog",
        liveUrl: "https://your-ecommerce-demo.com",
        githubUrl: "https://github.com/yourusername/ecommerce-catalog-repo",
        isFeatured: true
    },
    {
        title: "music recommendation system",
        description: "A music recommendation system that suggests songs based on user preferences and listening history, utilizing a simple backend API.",
        technologies: ["python","falsk","pandas","numpy","scikit-learn","HTML","CSS", "JavaScript",'API'],
        imageUrl: "https://placehold.co/600x400/38A169/FFFFFF?text=Task+Manager",
        liveUrl: "https://your-task-app-demo.com",
        githubUrl: "https://github.com/yourusername/task-manager-repo"
    },
    {
        title: "Recipe Finder App",
        description: "An application that allows users to search for recipes based on ingredients and dietary preferences, integrating with an external recipe API.",
        technologies: ["React", "Axios", "External API", "Material UI", "HTML", "CSS"],
        imageUrl: "https://placehold.co/600x400/805AD5/FFFFFF?text=Recipe+Finder",
        liveUrl: "https://your-recipe-app-demo.com",
        githubUrl: "https://github.com/yourusername/recipe-finder-repo"
    },
    {
        title: "Blog Platform Backend",
        description: "A robust backend API for a blogging platform, including user authentication, post management, and comment functionality. Ready for a frontend integration.",
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "RESTful API", "Unit Testing"],
        imageUrl: "https://placehold.co/600x400/DD6B20/FFFFFF?text=Blog+Backend",
        liveUrl: "", // No live demo for a backend-only project
        githubUrl: "https://github.com/yourusername/blog-backend-repo"
    }
];

// Function to import data into the database
const importData = async () => {
    try {
        await connectDB(); // Ensure DB is connected

        // Clear existing projects to prevent duplicates on re-import
        await Project.deleteMany();
        console.log('Existing projects cleared!');

        // Insert new sample data
        await Project.insertMany(sampleProjects);
        console.log('Data Imported!');
        process.exit(); // Exit gracefully
    } catch (error) {
        console.error(`Error importing data: ${error.message}`);
        process.exit(1); // Exit with error
    }
};

// Function to destroy all data in the database
const destroyData = async () => {
    try {
        await connectDB(); // Ensure DB is connected

        // Delete all projects
        await Project.deleteMany();
        console.log('Data Destroyed!');
        process.exit(); // Exit gracefully
    } catch (error) {
        console.error(`Error destroying data: ${error.message}`);
        process.exit(1); // Exit with error
    }
};

// Command line argument handling
// To import: node backend/seed.js -i
// To destroy: node backend/seed.js -d
if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    destroyData();
} else {
    console.log('Usage:');
    console.log('  node backend/seed.js -i   (to import sample data)');
    console.log('  node backend/seed.js -d   (to destroy all data)');
    process.exit(0);
}
