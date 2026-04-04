import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import Logo from '../assets/favicon.svg';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className={`projects-logo-wrapper ${isScrolled ? 'fixed-logo' : ''}`}>
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="projects-content">
                    <h1 className="projects-title">PROJECTS</h1>
                </div>

                <div className={`projects-nav-wrapper ${isScrolled ? 'fixed-nav' : ''}`}>
                    <nav className="site-nav">
                        <div className="nav-pill">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/projects" className="nav-link active">Projects</Link>
                            <Link to="/about" className="nav-link">About</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Projects;
