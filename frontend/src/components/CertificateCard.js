    // frontend/src/components/CertificateCard.js
    import React from 'react';
    import { Box, Image, Text, Heading, Link, Button, Flex } from '@chakra-ui/react';
    import { FaExternalLinkAlt } from 'react-icons/fa'; // For external link icon

    /**
     * CertificateCard Component
     * Displays a single certificate with its title, organization, issue date,
     * and a link to verify the credential online.
     *
     * @param {object} props - The component props.
     * @param {object} props.certificate - The certificate object.
     * @param {string} props.certificate.title - The title of the certificate.
     * @param {string} props.certificate.issuingOrganization - The organization that issued the certificate.
     * @param {string} props.certificate.issueDate - The date the certificate was issued (ISO string).
     * @param {string} [props.certificate.imageUrl] - Optional URL for the certificate image/badge.
     * @param {string} [props.certificate.credentialUrl] - Optional URL to verify the credential.
     */
    function CertificateCard({ certificate }) {
        const formatDate = (dateString) => {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        };

        return (
            <Box
                maxW={{ base: "xs", sm: "sm", md: "md" }}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.2s ease-in-out"
                bg="white"
                p={4}
                mx="auto"
            >
                {certificate.imageUrl && (
                    <Image
                        src={certificate.imageUrl}
                        alt={`Certificate: ${certificate.title}`}
                        borderRadius="md"
                        mb={4}
                        objectFit="cover"
                        width="100%"
                        height="200px"
                    />
                )}

                <Heading as="h3" size="md" mb={2} noOfLines={2} fontWeight="semibold">
                    {certificate.title}
                </Heading>

                <Text fontSize="sm" color="gray.600" mb={1}>
                    **Issued by:** {certificate.issuingOrganization}
                </Text>
                <Text fontSize="sm" color="gray.600" mb={3}>
                    **Date:** {formatDate(certificate.issueDate)}
                </Text>

                {certificate.credentialUrl && (
                    <Flex justify="center" mt={4}>
                        <Link href={certificate.credentialUrl} isExternal _hover={{ textDecoration: 'none' }}>
                            <Button
                                leftIcon={<FaExternalLinkAlt />}
                                colorScheme="purple" // A distinct color for certificates
                                size="sm"
                                width="full"
                                _hover={{ bg: "purple.600" }}
                            >
                                View Credential
                            </Button>
                        </Link>
                    </Flex>
                )}
            </Box>
        );
    }

    export default CertificateCard;
    