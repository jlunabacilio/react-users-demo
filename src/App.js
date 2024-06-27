import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Users from './Users';
import NewUser from './NewUser';
import Contact from './Contact';
import './styles.css';

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/users" element={<Users/>} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
