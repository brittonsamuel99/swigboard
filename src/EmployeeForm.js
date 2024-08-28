import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Position:</label>
                <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                >
                    <option value="employee">Employee</option>
                    <option value="shift lead">Shift Lead</option>
                    <option value="agm">AGM</option>
                    <option value="gm">GM</option>
                </select>
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;