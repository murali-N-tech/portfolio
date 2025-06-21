// frontend/src/components/ProjectCard.js
import React from 'react';

// Import Chakra UI components to construct the card's UI
import {
    Box,        // General purpose container (like a div) for the card itself
    Image,      // For displaying the project's main image
    Text,       // For descriptive text
    Heading,    // For the project title
    Tag,        // For displaying technology labels (e.g., "React", "Node.js")
    TagLabel,   // Text content within a Tag
    Flex,       // A flexbox container for flexible layout (e.g., for tags or buttons)
    Link,       // For creating external hyperlinks
    Button      // For interactive buttons (e.g., "Live Demo", "GitHub")
} from '@chakra-ui/react';

// Import specific icons from the react-icons/fa (Font Awesome) library
// Ensure 'react-icons' is installed in your frontend directory: npm install react-icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ProjectCard Component
 * Renders a visually appealing card for a single project, showcasing its details.
 *
 * @param {object} props - The component's properties.
 * @param {object} props.project - An object containing the project's data.
 * @param {string} props.project.title - The title of the project.
 * @param {string} props.project.description - A brief summary of the project.
 * @param {string[]} props.project.technologies - An array of strings, each representing a technology used.
 * @param {string} [props.project.imageUrl] - Optional URL to the project's image.
 * @param {string} [props.project.liveUrl] - Optional URL to the live demo of the project.
 * @param {string} [props.project.githubUrl] - Optional URL to the project's GitHub repository.
 */
function ProjectCard({ project }) {
    return (
        <Box
            maxW={{ base: "xs", sm: "sm", md: "md" }} // Sets max width for responsiveness: extra-small, small, medium screens
            borderWidth="1px"               // Adds a 1-pixel border
            borderRadius="lg"               // Applies large border-radius for rounded corners
            overflow="hidden"               // Hides any content that overflows the rounded corners
            boxShadow="lg"                  // Applies a large shadow for a lifted effect
            _hover={{                        // Styles to apply when the mouse hovers over the card
                boxShadow: "xl",            // Larger shadow on hover
                transform: "translateY(-5px)" // Lifts the card slightly on hover
            }}
            transition="all 0.2s ease-in-out" // Smooth transition for hover effects
            bg="white"                      // Background color of the card
            p={4}                           // Padding inside the card (Chakra UI spacing units)
            mx="auto"                       // Centers the box horizontally if it's not taking full width
        >
            {/* Project Image */}
            <Image
                src={project.imageUrl || 'https://via.placeholder.com/400x250?text=Project+Image'} // Displays project image, or a placeholder if none
                alt={`Screenshot of ${project.title}`} // Alt text for accessibility
                borderRadius="md"           // Medium border-radius for the image
                mb={4}                      // Margin-bottom below the image
                objectFit="cover"           // Ensures the image covers the area without distortion
                width="100%"                // Image takes full width of its container
                height="200px"              // Fixed height for visual consistency across cards
            />

            {/* Project Title */}
            <Heading as="h3" size="md" mb={2} noOfLines={1} fontWeight="semibold">
                {project.title}
            </Heading>

            {/* Project Description */}
            <Text fontSize="sm" color="gray.600" mb={3} noOfLines={3}>
                {project.description}
            </Text>

            {/* Technologies Used (Tags) */}
            <Flex wrap="wrap" mb={4} gap={2}> {/* Wraps tags to next line if space is limited, adds gap */}
                {project.technologies && project.technologies.map((tech, index) => (
                    <Tag
                        key={index} // Using index as key is acceptable here if the list is static and not reordered
                        size="sm"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="blue" // Example color for the tags
                    >
                        <TagLabel>{tech}</TagLabel>
                    </Tag>
                ))}
            </Flex>

            {/* Action Buttons (Live Demo, GitHub) */}
            <Flex justify="space-between" mt={4} flexWrap="wrap" gap={3}> {/* Justifies content, wraps, adds gap */}
                {project.liveUrl && ( // Conditionally render button if liveUrl exists
                    <Link href={project.liveUrl} isExternal _hover={{ textDecoration: 'none' }}> {/* isExternal opens in new tab */}
                        <Button
                            leftIcon={<FaExternalLinkAlt />} // Icon for live demo
                            colorScheme="teal" // Teal color scheme for the button
                            size="sm"
                            width="full" // Button takes full width on small screens
                            _hover={{ bg: "teal.600" }} // Darker teal on hover
                        >
                            Live Demo
                        </Button>
                    </Link>
                )}
                {project.githubUrl && ( // Conditionally render button if githubUrl exists
                    <Link href={project.githubUrl} isExternal _hover={{ textDecoration: 'none' }}>
                        <Button
                            leftIcon={<FaGithub />} // Icon for GitHub
                            colorScheme="gray" // Gray color scheme for GitHub
                            size="sm"
                            variant="outline" // Outline style button
                            width="full"
                            _hover={{ bg: "gray.50", borderColor: "gray.400" }} // Subtle hover effect
                        >
                            GitHub
                        </Button>
                    </Link>
                )}
            </Flex>
        </Box>
    );
}

export default ProjectCard;
