import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';

function EmployeeForm({ addEmployee }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('employee');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee({ name, position });
        setName('');
        setPosition('employee');
    };

    return (
        <Box as="form" onSubmit={handleSubmit} p="4" bg="gray.50" borderRadius="md" boxShadow="sm">
            <Stack spacing="4">
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter employee name"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Position</FormLabel>
                    <Select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    >
                        <option value="employee">Employee</option>
                        <option value="shift lead">Shift Lead</option>
                        <option value="agm">AGM</option>
                        <option value="gm">GM</option>
                    </Select>
                </FormControl>
                <Button colorScheme="teal" type="submit">
                    Add Employee
                </Button>
            </Stack>
        </Box>
    );
}

export default EmployeeForm;
