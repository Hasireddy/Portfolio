import React from 'react';
import "../App.css";
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">UMA MAHESWARI</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Education</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
        </div>

    );
}

export default Navbar;

