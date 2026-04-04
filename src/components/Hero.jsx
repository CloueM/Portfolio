import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import Logo from '../assets/favicon.svg';

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Stick to top after scrolling 150px down
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className={`hero-logo-wrapper ${isScrolled ? 'fixed-logo' : ''}`}>
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-web">WEB</h1>
                    </div>
                    <div className="hero-right">
                        <h1 className="hero-designer">DESIGNER</h1>
                        <h1 className="hero-developer">DEVELOPER</h1>
                    </div>
                </div>

                <div className={`hero-nav-wrapper ${isScrolled ? 'fixed-nav' : ''}`}>
                    <nav className="site-nav">
                        <div className="nav-pill">
                            <a href="#home" className="nav-link active">Home</a>
                            <a href="#projects" className="nav-link">Projects</a>
                            <a href="#about" className="nav-link">About</a>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Hero;
