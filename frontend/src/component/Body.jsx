import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Header from './Header';
import Browse from './Browse';


const Body = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </Router>

        </>
    )
}

export default Body
