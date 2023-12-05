// src/Menu.js
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/flights">Flights</Link></li>
                <li><Link to="/planes">Planes</Link></li>
                <li><Link to="/bookings">Bookings</Link></li>
                <li><Link to="/passengers">Passengers</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
