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
import { HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '8px 12px',
        borderRadius: 'md',
        transition: 'background-color 0.2s ease-in-out',
    };

    const navLinkHoverStyle = {
        backgroundColor: 'teal.600',
        color: 'white',
    };

    return (
        <Flex
            as="nav"
            p={4}
            bg="#082567" // Updated color
            color="white"
            align="center"
            justify="center"
            wrap="wrap"
            boxShadow="md"
            position="sticky"
            top="0"
            zIndex="10"
        >
            {/* Hamburger Icon for Mobile */}
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

            {/* Desktop Navigation */}
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                {['/', '/about', '/projects', '/skills', '/certificates', '/contact'].map((path, i) => (
                    <Link
                        key={path}
                        to={path}
                        style={navLinkStyle}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                    >
                        {['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Contact'][i]}
                    </Link>
                ))}
            </HStack>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="#082567" color="white"> {/* Updated */}
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">Portfolio</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch" onClick={onClose}>
                            {['/', '/about', '/projects', '/skills', '/certificates', '/contact'].map((path, i) => (
                                <Link
                                    key={path}
                                    to={path}
                                    style={navLinkStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                                >
                                    {['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Contact'][i]}
                                </Link>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Navbar;
