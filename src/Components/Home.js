// src/Components/Home.js
import React from 'react';
import '../Styles/Home.css'; // Make sure to import the CSS file

const Home = () => {
    const imageUrl = "https://www.webfx.com/wp-content/uploads/2021/10/visible-display-ad-example.png";

    return (
        <div className="home-container">
            <h1>Welcome to the Airline Management System</h1>
            <div className="ad-container">
                <a href={"https://www.fraude.fr/"} target={"_blank"} rel={"noreferrer"}><img src={imageUrl} alt="Advertisement" className="centered-image" width={"40%"} /></a>
            </div>
            {/* Other content */}
        </div>
    );
};

export default Home;
