    // frontend/src/pages/Certificates.js
    import React, { useEffect, useState } from 'react';
    import api from '../services/api'; // Your Axios instance for API calls
    import CertificateCard from '../components/CertificateCard'; // Component to render individual certificate cards

    // Import Chakra UI components
    import {
        Box,
        Heading,
        Text,
        SimpleGrid,
        Spinner,
        Alert,
        AlertIcon,
    } from '@chakra-ui/react';

    /**
     * Certificates Component
     * Fetches certificate data from the backend API and displays it in a responsive grid.
     * Handles loading, error, and empty states.
     */
    function Certificates() {
        const [certificates, setCertificates] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchCertificates = async () => {
                try {
                    setLoading(true);
                    setError(null);

                    const response = await api.get('/certificates'); // Fetch from /api/certificates
                    setCertificates(response.data);

                } catch (err) {
                    setError('Failed to fetch certificates. Please try again later.');
                    console.error('Error fetching certificates:', err);
                } finally {
                    setLoading(false);
                }
            };

            fetchCertificates();
        }, []);

        if (loading) {
            return (
                <Box p={5} textAlign="center" minHeight="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Spinner size="xl" color="purple.500" thickness="4px" emptyColor="gray.200" />
                    <Text mt={4} fontSize="lg" color="gray.700">Loading certificates...</Text>
                </Box>
            );
        }

        if (error) {
            return (
                <Box p={5} textAlign="center" minHeight="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Alert status="error" variant="left-accent" borderRadius="md" maxWidth="md">
                        <AlertIcon />
                        <Text fontSize="lg">{error}</Text>
                    </Alert>
                </Box>
            );
        }

        if (certificates.length === 0) {
            return (
                <Box p={5} textAlign="center" minHeight="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Heading as="h2" size="xl" mb={6}>
                        My Certificates
                    </Heading>
                    <Text fontSize="xl" color="gray.600">
                        No certificates found. Add some from the backend!
                    </Text>
                    <Text fontSize="md" color="gray.500" mt={2}>
                        (Use Postman/Insomnia to POST data to http://localhost:5000/api/certificates)
                    </Text>
                </Box>
            );
        }

        return (
            <Box p={5} maxWidth="1200px" mx="auto" my={8}>
                <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="extrabold" color="gray.800">
                    My Certificates
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {certificates.map(certificate => (
                        <CertificateCard key={certificate._id} certificate={certificate} />
                    ))}
                </SimpleGrid>
            </Box>
        );
    }

    export default Certificates;
    