// src/Components/Bookings.js
import React, { useState, useEffect } from 'react';
import '../Styles/Bookings.css'

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Replace 'your-api-endpoint/bookings' with the actual endpoint from where you are fetching bookings data.
        fetch('http://localhost:8080/bookings')
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Bookings</h1>
            <div className="bookings-list">
                {bookings.map(booking => (
                    <div key={booking.id} className="booking-card">
                        <h2>Flight: {booking.flight.number}</h2>
                        <p>From: {booking.flight.origin} To: {booking.flight.destination}</p>
                        <p>Departure: {booking.flight.departure_date} at {booking.flight.departure_time}</p>
                        <p>Arrival: {booking.flight.arrival_date} at {booking.flight.arrival_time}</p>
                        <p>Passenger: {booking.passenger.firstname} {booking.passenger.lastname}</p>
                        <p>Email: {booking.passenger.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookings;
