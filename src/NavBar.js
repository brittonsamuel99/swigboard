import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/board-maker">Board Maker</Link>
                </li>
                <li>
                    <Link to="/employee-editor">Employee Editor</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;