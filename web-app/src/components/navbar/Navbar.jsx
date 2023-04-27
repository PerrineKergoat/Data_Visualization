import React from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navbar__navbar-links">
                <p><a href="#figure1"> Figure 1 </a></p>
                <p><a href="#figure2"> Figure 2 </a></p>
            </div>
            Charting the Endangered
        </div>
    );
};

export default Navbar;