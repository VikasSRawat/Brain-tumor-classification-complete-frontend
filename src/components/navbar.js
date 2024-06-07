import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarStyle = {
        fontSize: '25px', // Set desired font size
        fontWeight: 'bold', // Optionally set font weight
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div style={navbarStyle}>Brain Tumor Analysis</div>
            <div className="desktopMenu">
                <Link to="intro" smooth={true} className="desktopMenuListItem">Home</Link>
                <Link to="skills" smooth={true} className="desktopMenuListItem">Features</Link>
                <Link to="prediction" smooth={true} className="desktopMenuListItem">Predict</Link>
                <Link to="contactPage" smooth={true} className="desktopMenuListItem">Network</Link>
            </div>
            <Link to="contactPage" smooth={true} className="desktopMenuBtn">Contact Us</Link>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isMenuOpen && (
                <div className="mobileMenu">
                    <Link to="home" smooth={true} className="mobileMenuListItem" onClick={toggleMenu}>Home</Link>
                    <Link to="features" smooth={true} className="mobileMenuListItem" onClick={toggleMenu}>Features</Link>
                    <Link to="Test" smooth={true} className="mobileMenuListItem" onClick={toggleMenu}>Predict</Link>
                    <Link to="analysis" smooth={true} className="mobileMenuListItem" onClick={toggleMenu}>Analysis</Link>
                    <button className="mobileMenuBtn" onClick={toggleMenu}>Contact Us</button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
