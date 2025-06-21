// frontend/src/pages/About.js
import React from 'react';
import { Box, Heading, Text, Container, Image, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Import a download icon

// Animation variants
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button); // Create a motion-enabled button

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

/**
 * About Component
 * This page provides a detailed introduction to yourself, your background,
 * passion for development, and professional journey, now including a resume download button.
 */
function About() {
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const headingColor = useColorModeValue('blue.600', 'blue.300');
    const buttonBgColor = useColorModeValue('blue.500', 'blue.400');
    const buttonHoverBgColor = useColorModeValue('blue.600', 'blue.500');

    // Placeholder URL for your resume.
    // Replace this with the actual URL to your resume PDF.
    const resumeUrl = 'https://drive.google.com/file/d/1VgSfrkFa7rAljQ05isGULvng_eHr6GYS/view?usp=sharing'; 

    return (
        <MotionBox
            as="section"
            py={{ base: 10, md: 20 }}
            bg={bgColor}
            color={textColor}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Container maxW="container.lg">
                <MotionHeading
                    as="h2"
                    size={{ base: 'xl', md: '2xl' }}
                    mb={8}
                    textAlign="center"
                    fontWeight="extrabold"
                    color={headingColor}
                    variants={itemVariants}
                >
                    About Me
                </MotionHeading>

                <Flex
                    direction={{ base: 'column', md: 'row' }} // Stack vertically on small, row on medium+
                    align="center"
                    gap={10}
                    mb={10}
                >
                    {/* Professional Headshot */}
                    <MotionBox
                        flexShrink={0} // Prevents image from shrinking
                        variants={itemVariants}
                    >
                        <Image
                            borderRadius="lg" // Slightly rounded corners
                            boxSize={{ base: '250px', md: '350px' }} // Responsive image size
                            src="https://res.cloudinary.com/dkpjimiip/image/upload/v1750336228/IMG-20250316-WA0009_bk9rrt.jpg" // Placeholder for your professional headshot
                            alt="Chinthada Murali Naga Raju"
                            objectFit="cover"
                            boxShadow="xl"
                        />
                    </MotionBox>

                    {/* About Content */}
                    <MotionBox flex="1" textAlign={{ base: 'center', md: 'left' }} variants={itemVariants}>
                        <MotionText fontSize={{ base: 'md', lg: 'lg' }} mb={4}>
                            I am Chinthada Murali Naga Raju, a dedicated Full-Stack Developer and Data Science enthusiast currently pursuing my B.Tech in AI & Data Science at SRKR Engineering College. With a strong foundation in both web development and data analytics, I thrive on transforming complex problems into elegant, scalable solutions.
                        </MotionText>
                        <MotionText fontSize={{ base: 'md', lg: 'lg' }} mb={4}>
                            My journey in technology began with a curiosity for coding, which evolved into a passion for building user-centric web applications and data-driven models. Whether it's crafting intuitive front-end interfaces with React, designing robust back-end systems with Node.js, or developing predictive algorithms with Python, I love every step of the creative process.
                        </MotionText>
                        <MotionText fontSize={{ base: 'md', lg: 'lg' }} mb={6}> {/* Increased margin-bottom here for the button */}
                            Beyond technical skills, I bring a problem-solving mindset, honed through hackathons and real-world projects. My internship experiences—from green energy data analysis to ed-tech web development—have taught me the value of collaboration, adaptability, and continuous learning.
                        </MotionText>

                        {/* Resume Button */}
                        <MotionButton
                            as="a" // Render button as an anchor tag
                            href={resumeUrl}
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security best practice for target="_blank"
                            colorScheme="blue"
                            size="lg"
                            leftIcon={<FaDownload />} // Download icon
                            mt={{ base: 4, md: 0 }} // Margin top for small screens
                            w={{ base: 'full', md: 'auto' }} // Full width on small screens, auto on medium+
                            px={8}
                            py={6}
                            borderRadius="full"
                            fontWeight="bold"
                            boxShadow="lg"
                            _hover={{ bg: buttonHoverBgColor, transform: 'translateY(-2px)' }}
                            _active={{ bg: buttonBgColor }}
                            bg={buttonBgColor}
                            color="white"
                            variants={itemVariants}
                        >
                            Download Resume
                        </MotionButton>
                    </MotionBox>
                </Flex>

                {/* Optional: Add a section for timeline, values, or more details */}
                {/*
                <MotionBox variants={itemVariants}>
                    <Heading as="h3" size="lg" mb={6} textAlign="center" mt={10} color={headingColor}>
                        My Journey So Far
                    </Heading>                
                    <Box borderWidth="1px" borderRadius="lg" p={6} boxShadow="md">
                        <Text fontSize="md">
                            [You can add a timeline here, e.g., key milestones, roles, and experiences.]
                        </Text>
                    </Box>
                </MotionBox>
                */}
            </Container>
        </MotionBox>
    );
}

export default About;
