// frontend/src/pages/Skills.js
import React from 'react';
import { Box, Heading, Container, Wrap, WrapItem, Tag, TagLabel, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// You can also import specific icons from react-icons/fa or react-icons/si if you want skill-specific icons

// Animation variants
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionTag = motion(Tag);

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
 * Skills Component
 * Displays your technical skills, categorized for clarity.
 * Uses Chakra UI Tags for a clean and organized presentation.
 */
function Skills() {
    // Hooks are called at the top level of the component
    const bgColor = useColorModeValue('gray.50', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const headingColor = useColorModeValue('blue.600', 'blue.300');
    const categoryHeadingColor = useColorModeValue('gray.700', 'whiteAlpha.800');


    // Define your skills in categories
    const skills = {
        'Frontend Development': [
            { name: 'React', color: 'cyan' },
            { name: 'JavaScript (ES6+)', color: 'yellow' },
            { name: 'HTML5', color: 'orange' },
            { name: 'CSS3', color: 'blue' },
            { name: 'Chakra UI', color: 'teal' },
            { name: 'Tailwind CSS', color: 'blue' },
            { name: 'Framer Motion', color: 'purple' },
            { name: 'Responsive Design', color: 'green' }
        ],
        'Backend Development': [
            { name: 'Node.js', color: 'green' },
            { name: 'Express.js', color: 'gray' },
            { name: 'RESTful APIs', color: 'red' },
            { name: 'Authentication (JWT)', color: 'pink' }
        ],
        'Databases': [
            { name: 'MongoDB', color: 'green' },
            { name: 'Mongoose', color: 'green' },
            { name: 'SQL (PostgreSQL/MySQL)', color: 'blue' }
        ],
        'Data Science & ML (Python)': [ // New Category
            { name: 'Machine Learning', color: 'orange' },
            { name: 'Pandas', color: 'purple' },
            { name: 'Scikit-learn (sklearn)', color: 'red' },
            { name: 'TensorFlow', color: 'orange' },
            { name: 'NumPy', color: 'cyan' }
        ],
        'ML Model Deployment': [ // New Category
            { name: 'Render', color: 'teal' },
            { name: 'Streamlit', color: 'pink' }
        ],
        'Tools & Technologies': [
            { name: 'Git', color: 'red' },
            { name: 'GitHub', color: 'gray' },
            { name: 'Postman', color: 'orange' },
            { name: 'VS Code', color: 'blue' },
            { name: 'npm / Yarn', color: 'red' },
            { name: 'Vercel / Netlify (Deployment)', color: 'purple' }
        ],
        'Concepts & Methodologies': [
            { name: 'MVC Architecture', color: 'teal' },
            { name: 'API Design', color: 'pink' },
            { name: 'Object-Oriented Programming (OOP)', color: 'purple' },
            { name: 'Data Structures & Algorithms', color: 'red' }
        ]
    };

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
                    size={{ base: '2xl', md: '3xl' }} // Increased text size here
                    mb={8}
                    textAlign="center"
                    fontWeight="extrabold"
                    color={headingColor}
                    variants={itemVariants}
                >
                    My Skills
                </MotionHeading>

                {Object.entries(skills).map(([category, skillList]) => (
                    <MotionBox key={category} mb={10} variants={itemVariants}>
                        <MotionHeading
                            as="h3"
                            size="lg"
                            mb={5}
                            textAlign={{ base: 'center', md: 'left' }}
                            color={categoryHeadingColor}
                            variants={itemVariants}
                        >
                            {category}
                        </MotionHeading>
                        <Wrap spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
                            {skillList.map((skill, index) => (
                                <WrapItem key={index}>
                                    <MotionTag
                                        size="lg"
                                        borderRadius="full"
                                        variant="solid"
                                        colorScheme={skill.color}
                                        px={4}
                                        py={2}
                                        boxShadow="md"
                                        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                                        transition="all 0.2s ease-in-out"
                                        variants={itemVariants}
                                    >
                                        <TagLabel fontSize="md" fontWeight="medium">
                                            {skill.name}
                                        </TagLabel>
                                    </MotionTag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </MotionBox>
                ))}
            </Container>
        </MotionBox>
    );
}

export default Skills;
