import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Browse from './Browse';


const Body = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/browse" element={<Browse />} />
                </Routes>
            </Router>

        </>
    )
}

export default Body
