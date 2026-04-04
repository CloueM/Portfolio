import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/favicon.svg';

const Header = () => {
    return (
        <header className="site-header">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <nav className="site-nav">
                <div className="nav-pill">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#about" className="nav-link">About</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
