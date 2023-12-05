// src/Components/Planes.js
import React, { useState, useEffect } from 'react';
import '../Styles/Planes.css'

const Planes = () => {
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        // Replace 'your-api-endpoint' with the actual endpoint where your planes data is fetched.
        fetch('http://localhost:8080/planes')
            .then(response => response.json())
            .then(data => setPlanes(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Planes</h1>
            <div className="planes-list">
                {planes.map(plane => (
                    <div key={plane.id} className="plane-card">
                        <h2>{plane.model}</h2>
                        <p>Operator: {plane.operator}</p>
                        <p>Registration: {plane.registration}</p>
                        <p>Capacity: {plane.capacity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planes;
