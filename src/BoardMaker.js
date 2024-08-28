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

    const positions = ['handout', 'greeter', 'drink maker', 'line buster'];

    const generateBoard = () => {
        const board = [];
        const shiftDuration = 0.5; // 0.5 hours

        // Determine the earliest start time and latest end time
        const startTimes = shifts.map(shift => new Date(`1970-01-01T${shift.startTime}:00`).getTime());
        const endTimes = shifts.map(shift => new Date(`1970-01-01T${shift.endTime}:00`).getTime());
        const earliestStartTime = Math.min(...startTimes);
        const latestEndTime = Math.max(...endTimes);

        // Create time slots for every 0.5 hours between the earliest start and latest end
        const timeSlots = [];
        for (let time = earliestStartTime; time <= latestEndTime; time += shiftDuration * 60 * 60 * 1000) {
            timeSlots.push(new Date(time).toISOString().substr(11, 5));
        }

        const lastAssignedPositions = {};

        timeSlots.forEach(timeSlot => {
            const shiftBoard = [];
            const availableEmployees = employees.filter(employee =>
                employee.positionsAbleToPerform.length > 0
            );

            let positionIndex = 0;

            availableEmployees.forEach(employee => {
                const availablePositions = positions.filter(position =>
                    employee.positionsAbleToPerform.includes(position) &&
                    !shiftBoard.some(s => s.employee === employee.name && s.position === position) &&
                    lastAssignedPositions[employee.name] !== position
                );

                if (availablePositions.length > 0) {
                    const position = availablePositions[positionIndex % availablePositions.length];
                    shiftBoard.push({
                        employee: employee.name,
                        position: position,
                        timeSlot: timeSlot
                    });
                    lastAssignedPositions[employee.name] = position;
                    positionIndex++;
                }
            });

            board.push({ timeSlot, shiftBoard });
        });

        console.log(board);
        alert('Board generated with ' + board.length + ' time slots.');
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