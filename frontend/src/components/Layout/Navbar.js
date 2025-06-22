    // frontend/src/components/Layout/Navbar.js
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Flex, Box, Spacer, HStack } from '@chakra-ui/react'; // Using Chakra UI for Navbar layout

    function Navbar() {
        return (
            <Flex
                as="nav"
                p={4}
                bg="gray.800"
                color="white"
                align="center"
                justify="space-between"
                wrap="wrap"
                boxShadow="md"
            >
                {/* Logo or Your Name */}
                <Box>
                    <Link to="/" style={{ fontSize: 'xl', fontWeight: 'bold', color: 'red', textDecoration: 'none' }}>
                        Chinthada Murali Naga Raju
                    </Link>
                </Box>

                <Spacer />

                {/* Navigation Links */}
                <HStack spacing={8} display={{ base: 'none', md: 'flex' }}> {/* Hide on mobile, show on md and up */}
                    <Link to="/" _hover={{ color: "teal.300" }}>Home</Link>
                    <Link to="/about" _hover={{ color: "teal.300" }}>About</Link>
                    <Link to="/projects" _hover={{ color: "teal.300" }}>Projects</Link>
                    <Link to="/skills" _hover={{ color: "teal.300" }}>Skills</Link>
                    <Link to="/certificates" _hover={{ color: "teal.300" }}>Certificates</Link> {/* <-- NEW: Add Certificates Link */}
                    <Link to="/contact" _hover={{ color: "teal.300" }}>Contact</Link>
                </HStack>

                {/* You might add a mobile menu icon here for responsive design */}
            </Flex>
        );
    }

    export default Navbar;
    
