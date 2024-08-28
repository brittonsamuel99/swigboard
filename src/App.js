import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import BoardMaker from './BoardMaker';
import EmployeeEditor from './EmployeeEditor';
import NavBar from './NavBar';
import './App.css';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/board-maker" element={<BoardMaker />} />
                        <Route path="/employee-editor" element={<EmployeeEditor />} />
                        <Route path="/" element={<Navigate to="/board-maker" />} />
                    </Routes>
                </div>
            </Router>
        </ChakraProvider>
    );
}

export default App;