// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flights from './Components/Flights';
import Planes from './Components/Planes';
import Bookings from './Components/Bookings';
import Passengers from './Components/Passengers';
import Menu from './Components/Menu';
import './App.css';
import Home from "./Components/Home";

const App = () => {
    return (
        <Router>
            <Menu />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/planes" element={<Planes />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/passengers" element={<Passengers />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
