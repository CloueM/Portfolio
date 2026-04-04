import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-left">
                    <h1 className="hero-web">WEB</h1>
                </div>
                <div className="hero-right">
                    <h1 className="hero-designer">DESIGNER</h1>
                    <h1 className="hero-developer">DEVELOPER</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
