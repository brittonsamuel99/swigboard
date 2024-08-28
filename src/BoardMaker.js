import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Heading,
    VStack,
    Text,
} from '@chakra-ui/react';

function BoardMaker() {
    const [shifts, setShifts] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [newShift, setNewShift] = useState({
        employee: '',
        startTime: '',
        endTime: ''
    });

    useEffect(() => {
        // Retrieve the list of employees from localStorage
        const savedEmployees = localStorage.getItem('employees');
        if (savedEmployees) {
            setEmployees(JSON.parse(savedEmployees));
        }
    }, []);

    const handleShiftChange = (e) => {
        const { name, value } = e.target;
        setNewShift({ ...newShift, [name]: value });
    };

    const addShift = () => {
        setShifts([...shifts, newShift]);
        setNewShift({ employee: '', startTime: '', endTime: '' });
    };

    const generateBoard = () => {
        // Placeholder for generate board logic
        alert('Board generated with ' + shifts.length + ' shifts.');
    };

    return (
        <Box bg="gray.100" minH="100vh" py="8">
            <Container maxW="container.md" bg="white" p="8" borderRadius="lg" boxShadow="lg">
                <Heading as="h1" size="xl" textAlign="center" mb="8">
                    Board Maker
                </Heading>

                {/* Shift Form */}
                <Stack spacing="4" mb="8">
                    <FormControl isRequired>
                        <FormLabel>Employee</FormLabel>
                        <Select
                            placeholder="Select employee"
                            name="employee"
                            value={newShift.employee}
                            onChange={handleShiftChange}
                        >
                            {employees.map((employee, index) => (
                                <option key={index} value={employee.name}>
                                    {employee.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Start Time</FormLabel>
                        <Input
                            type="time"
                            name="startTime"
                            value={newShift.startTime}
                            onChange={handleShiftChange}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>End Time</FormLabel>
                        <Input
                            type="time"
                            name="endTime"
                            value={newShift.endTime}
                            onChange={handleShiftChange}
                        />
                    </FormControl>

                    <Button colorScheme="teal" onClick={addShift}>
                        Add Shift
                    </Button>
                </Stack>

                {/* Shifts List */}
                <VStack spacing="4" mb="8">
                    {shifts.map((shift, index) => (
                        <Box
                            key={index}
                            p="4"
                            bg="gray.50"
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow="sm"
                            w="100%"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Text>
                                <strong>Employee:</strong> {shift.employee}
                            </Text>
                            <Text>
                                <strong>Time:</strong> {shift.startTime} - {shift.endTime}
                            </Text>
                        </Box>
                    ))}
                </VStack>

                {/* Generate Board Button */}
                <Button colorScheme="blue" size="lg" w="full" onClick={generateBoard}>
                    Generate Board
                </Button>
            </Container>
        </Box>
    );
}

export default BoardMaker;
