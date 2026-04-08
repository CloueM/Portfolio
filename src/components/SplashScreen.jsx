import React, { useState } from 'react';
import Logo from '../assets/favicon.svg';
import hoverSoundUrl from '../assets/sounds/hover-sfx.mp3';
import selectSoundUrl from '../assets/sounds/select-sfx.mp3';
import startSoundUrl from '../assets/sounds/start-sfx.mp3';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onStart }) => {
    const [isClosing, setIsClosing] = useState(false);

    const playSound = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play().catch(err => console.log("Audio playback failed:", err));
    };

    const handleStartClick = () => {
        playSound(startSoundUrl);
        setIsClosing(true);
        setTimeout(() => {
            onStart();
        }, 500); // Wait for the 0.5s CSS transition to finish
    };

    return (
        <div className={`splash-screen ${isClosing ? 'fade-out' : ''}`}>
            <div className="splash-content">
                <img src={Logo} alt="Cloue Mac Logo" className="splash-logo" />
                <button 
                    className="start-button" 
                    onClick={handleStartClick}
                    onMouseEnter={() => playSound(hoverSoundUrl)}
                    onFocus={() => playSound(hoverSoundUrl)}
                    onMouseDown={() => playSound(selectSoundUrl)}
                >
                    START
                </button>
            </div>
        </div>
    );
};

export default SplashScreen;
