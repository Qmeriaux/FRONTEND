import React, { useState, useEffect } from 'react';
import '../Styles/Flights.css';

const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/flights')
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Flight Information</h1>
            {flights.map(flight => (
                <div key={flight.id} className="flight-card">
                    <h2>Flight: {flight.number}</h2>
                    <p>Origin: {flight.origin} - Destination: {flight.destination}</p>
                    <p>Departure: {flight.departure_date} at {flight.departure_time}</p>
                    <p>Arrival: {flight.arrival_date} at {flight.arrival_time}</p>
                    <h3>Passengers:</h3>
                    <ul>
                        {flight.bookings.length > 0 ? (
                            flight.bookings.map(booking => (
                                <li key={booking.id}>
                                    {booking.passenger.firstname} {booking.passenger.lastname}
                                </li>
                            ))
                        ) : (
                            <li>No bookings</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Flights;
