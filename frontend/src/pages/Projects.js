// frontend/src/pages/Projects.js
import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Your Axios instance for making API calls
import ProjectCard from '../components/ProjectCard'; // Component to render individual project cards

// Import necessary Chakra UI components for layout, display, loading, and error handling
import {
    Box,        // A versatile container component (like a div)
    Heading,    // For displaying page titles
    Text,       // For displaying general text
    SimpleGrid, // A responsive grid component to lay out project cards
    Spinner,    // A loading indicator for when data is being fetched
    Alert,      // A component to display error or success messages
    AlertIcon,  // An icon component for the Alert (should be directly exported by Chakra UI v2)
} from '@chakra-ui/react';

/**
 * Projects Component
 * Fetches project data from the backend API and displays it in a responsive grid.
 * Handles loading, error, and empty states gracefully.
 */
function Projects() {
    // State to hold the array of projects fetched from the API
    const [projects, setProjects] = useState([]);
    // State to indicate whether data is currently being loaded
    const [loading, setLoading] = useState(true);
    // State to store any error message if fetching fails
    const [error, setError] = useState(null);

    // useEffect hook runs once when the component mounts to fetch project data
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true); // Set loading to true before fetching starts
                setError(null);   // Clear any previous errors

                // Make the GET request to your backend's projects endpoint
                const response = await api.get('/projects');
                
                // Update the projects state with the data received
                setProjects(response.data);
                
            } catch (err) {
                // If an error occurs, set the error message and log the error for debugging
                setError('Failed to fetch projects. Please try again later.');
                console.error('Error fetching projects:', err);
            } finally {
                // Always set loading to false once the fetching process is complete
                setLoading(false);
            }
        };

        fetchProjects(); // Execute the fetch function
    }, []); // Empty dependency array means this effect runs only once on mount

    // --- Conditional Rendering based on state ---

    // Display a loading spinner while data is being fetched
    if (loading) {
        return (
            <Box
                p={5}
                textAlign="center"
                minHeight="50vh" // Ensure it takes up enough vertical space
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Spinner
                    size="xl"           // Large size spinner
                    color="blue.500"    // Chakra UI blue color
                    thickness="4px"     // Thickness of the spinner ring
                    emptyColor="gray.200" // Color of the empty part of the ring
                />
                <Text mt={4} fontSize="lg" color="gray.700">Loading projects...</Text>
            </Box>
        );
    }

    // Display an alert if an error occurred during fetching
    if (error) {
        return (
            <Box
                p={5}
                textAlign="center"
                minHeight="50vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Alert status="error" variant="left-accent" borderRadius="md" maxWidth="md">
                    <AlertIcon /> {/* Icon for the alert message */}
                    <Text fontSize="lg">{error}</Text>
                </Alert>
            </Box>
        );
    }

    // Display a message if no projects are found after loading
    if (projects.length === 0) {
        return (
            <Box
                p={5}
                textAlign="center"
                minHeight="50vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading as="h2" size="xl" mb={6}>
                    My Projects
                </Heading>
                <Text fontSize="xl" color="gray.600">
                    No projects found. Time to add some from the backend!
                </Text>
                <Text fontSize="md" color="gray.500" mt={2}>
                    (Use Postman/Insomnia to POST data to http://localhost:5000/api/projects)
                </Text>
            </Box>
        );
    }

    // --- Render Projects Grid ---
    // If projects are loaded successfully, display them in a responsive grid
    return (
        <Box p={5} maxWidth="1200px" mx="auto" my={8}> {/* Centered content area with padding and margin */}
            <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="extrabold" color="gray.800">
                My Projects
            </Heading>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }} // 1 column on small screens, 2 on medium, 3 on large
                spacing={8} // Spacing between grid items
            >
                {/* Map over the projects array and render a ProjectCard for each */}
                {projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Projects;
