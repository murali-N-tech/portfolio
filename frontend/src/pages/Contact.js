// frontend/src/pages/Contact.js
import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    useToast,
    useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import api from '../services/api';

// Animation variants
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } }
};

/**
 * Contact Component
 * This page provides a contact form for visitors to send messages.
 * It handles form state, submission, and displays toast notifications.
 */
function Contact() {
    const toast = useToast();
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const headingColor = useColorModeValue('blue.600', 'blue.300');
    const inputBgColor = useColorModeValue('gray.100', 'gray.700');
    const inputBorderColor = useColorModeValue('gray.300', 'gray.600');

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { name, email, subject, message } = formData;

    // Handle input changes
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await api.post('/contact', formData);
            
            toast({
                title: 'Message Sent!',
                description: 'Thank you for your message. I will get back to you soon.',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            });
            
            // Clear the form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting contact form:', error);
            toast({
                title: 'Submission Failed.',
                description: 'There was an error sending your message. Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            });
        } finally {
            setIsSubmitting(false);
        }
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
            <Container maxW="container.md">
                <MotionHeading
                    as="h2"
                    size={{ base: 'xl', md: '2xl' }}
                    mb={8}
                    textAlign="center"
                    fontWeight="extrabold"
                    color={headingColor}
                    variants={containerVariants}
                >
                    Get in Touch
                </MotionHeading>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Text
                        fontSize={{ base: 'md', lg: 'lg' }}
                        textAlign="center"
                        mb={10}
                        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
                    >
                        Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
                    </Text>
                </motion.div>

                <VStack
                    as="form"
                    spacing={6}
                    onSubmit={onSubmit}
                    p={8}
                    borderWidth="1px"
                    borderRadius="lg"
                    boxShadow="lg"
                    bg={useColorModeValue('white', 'gray.700')}
                    variants={containerVariants}
                >
                    <FormControl id="name" isRequired variants={formItemVariants}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Your Name"
                            bg={inputBgColor}
                            borderColor={inputBorderColor}
                            _hover={{ borderColor: headingColor }}
                            _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                        />
                    </FormControl>

                    <FormControl id="email" isRequired variants={formItemVariants}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="you@example.com"
                            bg={inputBgColor}
                            borderColor={inputBorderColor}
                            _hover={{ borderColor: headingColor }}
                            _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                        />
                    </FormControl>

                    <FormControl id="subject" variants={formItemVariants}>
                        <FormLabel>Subject</FormLabel>
                        <Input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={onChange}
                            placeholder="Regarding a project, collaboration, etc."
                            bg={inputBgColor}
                            borderColor={inputBorderColor}
                            _hover={{ borderColor: headingColor }}
                            _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                        />
                    </FormControl>

                    <FormControl id="message" isRequired variants={formItemVariants}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            name="message"
                            value={message}
                            onChange={onChange}
                            placeholder="Your message here..."
                            rows={6}
                            bg={inputBgColor}
                            borderColor={inputBorderColor}
                            _hover={{ borderColor: headingColor }}
                            _focus={{ borderColor: headingColor, boxShadow: `0 0 0 1px ${headingColor}` }}
                        />
                    </FormControl>

                    <MotionButton
                        type="submit"
                        colorScheme="blue"
                        size="lg"
                        width="full"
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                        _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                        variants={formItemVariants}
                    >
                        Send Message
                    </MotionButton>
                </VStack>
            </Container>
        </MotionBox>
    );
}

export default Contact;