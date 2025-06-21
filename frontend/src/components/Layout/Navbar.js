// frontend/src/components/Layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    HStack,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'; // Import HamburgerIcon

// IMPORTANT: If you encounter "Module not found: Error: Can't resolve '@chakra-ui/icons'",
// please install it by running: npm install @chakra-ui/icons @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6

function Navbar() {
    // useDisclosure hook to control the mobile drawer's open/close state
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Common style for navigation links, both desktop and mobile
    const navLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '8px 12px', // Add some padding for better clickability
        borderRadius: 'md',  // Rounded corners for links
        transition: 'background-color 0.2s ease-in-out', // Smooth transition for hover
    };

    // Hover style for navigation links
    const navLinkHoverStyle = {
        backgroundColor: 'teal.600', // Darker teal on hover
        color: 'white', // Ensure text color remains white on hover
    };

    return (
        <Flex
            as="nav"
            p={4}
            bg="gray.800"
            color="white"
            align="center"
            justify="center" // Centered on desktop
            wrap="wrap"
            boxShadow="md"
            position="sticky" // Make navbar sticky at the top
            top="0"
            zIndex="10" // Ensure it stays on top of other content
        >
            {/* Hamburger Icon for Mobile (visible only on small screens) */}
            <Box display={{ base: 'flex', md: 'none' }} position="absolute" left="4">
                <IconButton
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    variant="ghost"
                    color="white"
                    aria-label="Open Navigation"
                    _hover={{ bg: 'gray.700' }}
                />
            </Box>

            {/* Desktop Navigation Links (hidden on mobile) */}
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                <Link to="/" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Home</Link>
                <Link to="/about" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>About</Link>
                <Link to="/projects" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Projects</Link>
                <Link to="/skills" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Skills</Link>
                <Link to="/certificates" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Certificates</Link>
                <Link to="/contact" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Contact</Link>
            </HStack>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="gray.800" color="white">
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">Navigation</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch" onClick={onClose}> {/* Close drawer on link click */}
                            <Link to="/" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Home</Link>
                            <Link to="/about" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>About</Link>
                            <Link to="/projects" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Projects</Link>
                            <Link to="/skills" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Skills</Link>
                            <Link to="/certificates" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Certificates</Link>
                            <Link to="/contact" style={navLinkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = navLinkStyle.backgroundColor}>Contact</Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;
