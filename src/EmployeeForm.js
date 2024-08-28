import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    VStack
} from '@chakra-ui/react';

function EmployeeForm({ addEmployee }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('employee');
    const [positionsAbleToPerform, setPositionsAbleToPerform] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee({ name, position, positionsAbleToPerform });
        setName('');
        setPosition('employee');
        setPositionsAbleToPerform([]);
    };

    const handlePositionsChange = (selectedPositions) => {
        setPositionsAbleToPerform(selectedPositions);
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Stack spacing="4">
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                <FormControl>
                    <FormLabel>Positions Able to Perform</FormLabel>
                    <CheckboxGroup
                        value={positionsAbleToPerform}
                        onChange={handlePositionsChange}
                    >
                        <VStack align="start">
                            <Checkbox value="handout">Handout</Checkbox>
                            <Checkbox value="greeter">Greeter</Checkbox>
                            <Checkbox value="drink maker">Drink Maker</Checkbox>
                            <Checkbox value="line buster">Line Buster</Checkbox>
                        </VStack>
                    </CheckboxGroup>
                </FormControl>

                <Button type="submit" colorScheme="teal">
                    Add Employee
                </Button>
            </Stack>
        </Box>
    );
}

export default EmployeeForm;
