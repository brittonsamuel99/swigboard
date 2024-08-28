import React, { useState, useEffect } from 'react';
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
        <div>
            <h1>Employee Editor</h1>
            <EmployeeForm addEmployee={addEmployee} />
            <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
        </div>
    );
}

export default EmployeeEditor;