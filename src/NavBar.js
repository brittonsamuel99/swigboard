import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Flex, Heading } from '@chakra-ui/react';

function NavBar() {
    return (
        <Box as="nav" p="4" bg="gray.800" color="white" boxShadow="md">
            <Flex
                maxW="1200px"
                mx="auto"
                align="center"
                justify="space-between"
                wrap="wrap"
            >
                <Heading as="h1" size="lg">
                    Sam's Swig Site
                </Heading>
                <Stack
                    direction={["column", "row"]}
                    spacing="8"
                    align="center"
                    mt={["4", "0"]}
                >
                    <Link
                        as={RouterLink}
                        to="/board-maker"
                        fontWeight="bold"
                        _hover={{ color: "teal.300", textDecoration: "none" }}
                    >
                        Board Maker
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/employee-editor"
                        fontWeight="bold"
                        _hover={{ color: "teal.300", textDecoration: "none" }}
                    >
                        Employee Editor
                    </Link>
                </Stack>
            </Flex>
        </Box>
    );
}

export default NavBar;
