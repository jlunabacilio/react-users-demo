import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <ul className="left-menu">
                <li><Link to="/">Home</Link></li>
            </ul>
            <ul className="right-menu">
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/newuser">New User</Link></li>
                <li><Link to="/updateuser">Modify Existing User</Link></li>
                <li><Link to="/deleteuser">Delete User</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Menu;