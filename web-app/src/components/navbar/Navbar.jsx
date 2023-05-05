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
                <p><a href="#figureMap"> Map </a></p>
                <p><a href="#figure2"> Protected areas </a></p>
                <p><a href="#figure2"> Species tree </a></p>
            </div>
        </div>
    );
};

export default Navbar;