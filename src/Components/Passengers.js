// src/Components/Passengers.js
import React, { useState, useEffect } from 'react';
import '../Styles/Passengers.css'

const Passengers = () => {
    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        // Replace 'your-api-endpoint/passengers' with the actual endpoint from where you are fetching passengers data.
        fetch('http://localhost:8080/passengers')
            .then(response => response.json())
            .then(data => setPassengers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Passengers</h1>
            <div className="passengers-list">
                {passengers.map(passenger => (
                    <div key={passenger.id} className="passenger-card">
                        <h2>{passenger.firstname} {passenger.lastname}</h2>
                        <p>Email: {passenger.email}</p>
                        <h3>Bookings:</h3>
                        <ul>
                            {passenger.bookings.map(booking => (
                                <li key={booking.id}>
                                    Flight {booking.flight.number} from {booking.flight.origin} to {booking.flight.destination}
                                    on {booking.flight.departure_date} at {booking.flight.departure_time}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Passengers;
