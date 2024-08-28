import React, { useState } from 'react';
import { Box, Container, Heading, Divider } from '@chakra-ui/react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

function EmployeeEditor() {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    const addEmployee = (employee) => {
        const updatedEmployees = [...employees, employee];
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    const deleteEmployee = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    return (
        <Box bg="gray.100" minH="100vh" py="8">
            <Container maxW="container.md" bg="white" p="8" borderRadius="lg" boxShadow="lg">
                <Heading as="h1" size="xl" textAlign="center" mb="8">
                    Employee Editor
                </Heading>
                <EmployeeForm addEmployee={addEmployee} />
                <Divider my="6" />
                <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
            </Container>
        </Box>
    );
}

export default EmployeeEditor;
