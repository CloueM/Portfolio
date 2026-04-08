import React, { useState } from 'react';
import Logo from '../assets/favicon.svg';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onStart }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleStartClick = () => {
        setIsClosing(true);
        setTimeout(() => {
            onStart();
        }, 500); // Wait for the 0.5s CSS transition to finish
    };

    return (
        <div className={`splash-screen ${isClosing ? 'fade-out' : ''}`}>
            <div className="splash-content">
                <img src={Logo} alt="Cloue Mac Logo" className="splash-logo" />
                <button className="start-button" onClick={handleStartClick}>
                    START
                </button>
            </div>
        </div>
    );
};

export default SplashScreen;
