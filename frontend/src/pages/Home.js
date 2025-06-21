// frontend/src/pages/Home.js
import React from 'react';
import { Box, Heading, Text, Button, Flex, Container, Image, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion'; // For subtle animations, ensure 'framer-motion' is installed

// Animation variants for Framer Motion
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Delay children animation
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

/**
 * Home Component
 * This is the landing page of your portfolio. It features a hero section
 * with an introduction, a profile image placeholder, and call-to-action buttons.
 */
function Home() {
    // Chakra UI hook to get different colors based on color mode (light/dark)
    const bgColor = useColorModeValue('gray.50', 'gray.700'); // Light gray for light mode, dark gray for dark mode
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const accentColor = useColorModeValue('blue.500', 'blue.300');

    return (
        <MotionBox
            as="section"
            py={{ base: 10, md: 20 }} // Responsive vertical padding
            bg={bgColor}
            color={textColor}
            textAlign="center"
            minH="calc(100vh - 120px)" // Adjust based on Navbar/Footer height
            display="flex"
            alignItems="center"
            justifyContent="center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Container maxW="container.lg">
                <Flex
                    direction={{ base: 'column', md: 'row' }} // Stack vertically on small, row on medium+
                    align="center"
                    justify="space-between"
                    gap={10}
                >
                    {/* Hero Content (Left/Top) */}
                    <MotionBox flex="1" variants={itemVariants}>
                        <MotionHeading
                            as="h1"
                            size={{ base: '2xl', md: '3xl', lg: '4xl' }} // Responsive heading size
                            mb={4}
                            fontWeight="extrabold"
                            lineHeight="shorter"
                        >
                            Hi, I'm <Text as="span" color={accentColor}>Chinthada Murali Naga Raju</Text>
                        </MotionHeading>
                        <MotionText
                            fontSize={{ base: 'xl', md: '2xl' }} // Responsive text size
                            mb={6}
                            fontWeight="medium"
                        >
                            A Passionate Full-Stack Developer ,Data Scientist, and AI Enthusiast
                        </MotionText>
                        <MotionText
                            fontSize={{ base: 'md', md: 'lg' }} // Responsive text size
                            maxW="2xl"
                            mx="auto"
                            mb={8}
                            color={useColorModeValue('gray.600', 'whiteAlpha.700')}
                        >
                            a passionate Full-Stack Web Developer and Data Science enthusiast with a strong foundation in building scalable web applications and data-driven solutions. My expertise spans from designing intuitive front-end interfaces to developing robust back-end systems and leveraging data analysis for actionable insights.
                        </MotionText>

                        {/* Call-to-Action Buttons */}
                        <Flex
                            justify="center"
                            gap={4}
                            direction={{ base: 'column', sm: 'row' }} // Stack buttons on very small, row on small+
                        >
                            <MotionButton
                                as={RouterLink}
                                to="/projects"
                                size="lg"
                                colorScheme="blue"
                                rightIcon={<Box as="span" ml={2}>➡️</Box>} // Simple arrow icon
                                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                                variants={itemVariants}
                            >
                                View My Projects
                            </MotionButton>
                            <MotionButton
                                as={RouterLink}
                                to="/about"
                                size="lg"
                                variant="outline"
                                colorScheme="blue"
                                _hover={{ bg: useColorModeValue('blue.50', 'blue.900'), transform: "translateY(-2px)", boxShadow: "md" }}
                                variants={itemVariants}
                            >
                                Learn More About Me
                            </MotionButton>
                        </Flex>
                    </MotionBox>

                    {/* Profile Image/Illustration (Right/Bottom) */}
                    <MotionBox
                        flex="1"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        variants={itemVariants}
                    >
                        <Image
                            borderRadius="full" // Circular image
                            boxSize={{ base: '200px', md: '300px' }} // Responsive image size
                            src="https://res.cloudinary.com/dkpjimiip/image/upload/v1750334971/passphoto_zobnqr.jpg" // Placeholder for your professional photo
                            alt="Your Profile Picture"
                            objectFit="cover"
                            boxShadow="xl"
                            border="4px solid"
                            borderColor={accentColor}
                            _hover={{ transform: "scale(1.02)", transition: "transform 0.3s ease-in-out" }}
                        />
                    </MotionBox>
                </Flex>
            </Container>
        </MotionBox>
    );
}

export default Home;
