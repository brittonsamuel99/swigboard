import React from 'react';
import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';

function EmployeeList({ employees, deleteEmployee }) {
    return (
        <Box p="6" maxW="800px" mx="auto">
            <Heading as="h2" size="lg" mb="6" textAlign="center">
                Employee List
            </Heading>
            <Stack spacing="4">
                {employees.map((employee, index) => (
                    <Box
                        key={index}
                        p="4"
                        bg="gray.50"
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="sm"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <VStack align="start" w="full">
                            <Text fontSize="lg" fontWeight="bold">
                                {employee.name} - {employee.position}
                            </Text>
                            {employee.positionsAbleToPerform && (
                                <Text fontSize="sm" color="gray.600">
                                    Can perform: {employee.positionsAbleToPerform.join(', ')}
                                </Text>
                            )}
                        </VStack>
                        <Button
                            colorScheme="red"
                            size="sm"
                            alignSelf="flex-end"
                            onClick={() => deleteEmployee(index)}
                        >
                            Delete
                        </Button>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}

export default EmployeeList;
