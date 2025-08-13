// frontend/src/pages/Skills.js
import React from 'react';
import { Box, Heading, Container, Wrap, WrapItem, Tag, TagLabel, TagLeftIcon, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// --- Import your desired icons from react-icons (with new additions) ---
import {
    FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava, FaProjectDiagram
} from 'react-icons/fa';
import {
    SiJavascript, SiChakraui, SiTailwindcss, SiFramer, SiExpress, SiMongodb, SiMongoose, SiPostgresql, SiPostman, SiVisualstudiocode, SiVercel, SiNetlify, SiRender, SiStreamlit, SiTypescript, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiJsonwebtokens
} from 'react-icons/si';
import { VscSymbolStructure } from 'react-icons/vsc';
import { CgWebsite } from 'react-icons/cg';
import { TbApi } from 'react-icons/tb';


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


function Skills() {
    const bgColor = useColorModeValue('gray.50', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const headingColor = useColorModeValue('blue.600', 'blue.300');
    const categoryHeadingColor = useColorModeValue('gray.700', 'whiteAlpha.800');

    // --- Define your skills with an 'icon' property (with updated icons) ---
    const skills = {
        'Frontend Development': [
            { name: 'React', color: 'cyan', icon: FaReact },
            { name: 'JavaScript (ES6+)', color: 'yellow', icon: SiJavascript },
            { name: 'HTML5', color: 'orange', icon: FaHtml5 },
            { name: 'CSS3', color: 'blue', icon: FaCss3Alt },
            { name: 'Chakra UI', color: 'teal', icon: SiChakraui },
            { name: 'Tailwind CSS', color: 'blue', icon: SiTailwindcss },
            { name: 'Framer Motion', color: 'purple', icon: SiFramer },
            { name: 'Responsive Design', color: 'green', icon: CgWebsite }
        ],
        'Backend Development': [
            { name: 'Node.js', color: 'green', icon: FaNodeJs },
            { name: 'Express.js', color: 'gray', icon: SiExpress },
            { name: 'RESTful APIs', color: 'red', icon: TbApi },
            { name: 'Authentication (JWT)', color: 'pink', icon: SiJsonwebtokens }
        ],
        'Databases': [
            { name: 'MongoDB', color: 'green', icon: SiMongodb },
            { name: 'Mongoose', color: 'green', icon: SiMongoose },
            { name: 'PostgreSQL', color: 'blue', icon: SiPostgresql },
        ],
        'Data Science & ML (Python)': [
            { name: 'Python', color: 'yellow', icon: FaPython },
            { name: 'Pandas', color: 'purple', icon: SiPandas },
            { name: 'NumPy', color: 'cyan', icon: SiNumpy },
            { name: 'Scikit-learn', color: 'red', icon: SiScikitlearn },
            { name: 'TensorFlow', color: 'orange', icon: SiTensorflow },
        ],
        'ML Model & App Deployment': [
            { name: 'Render', color: 'teal', icon: SiRender },
            { name: 'Streamlit', color: 'pink', icon: SiStreamlit },
            { name: 'Vercel', color: 'gray', icon: SiVercel },
            { name: 'Netlify', color: 'cyan', icon: SiNetlify },
        ],
        'Tools & Technologies': [
            { name: 'Git', color: 'red', icon: FaGitAlt },
            { name: 'GitHub', color: 'gray', icon: FaGithub },
            { name: 'Postman', color: 'orange', icon: SiPostman },
            { name: 'VS Code', color: 'blue', icon: SiVisualstudiocode },
        ],
        'Concepts & Methodologies': [
            { name: 'MVC Architecture', color: 'teal', icon: VscSymbolStructure },
            { name: 'API Design', color: 'pink', icon: TbApi },
            { name: 'OOP', color: 'purple', icon: FaJava }, // Java is a great example of OOP
            { name: 'Data Structures & Algorithms', color: 'red', icon: FaProjectDiagram }
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
                    size={{ base: '2xl', md: '3xl' }}
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
                            {skillList.map((skill) => (
                                <WrapItem key={skill.name}>
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
                                        <TagLeftIcon as={skill.icon} boxSize='20px' />
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
