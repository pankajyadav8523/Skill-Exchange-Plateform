import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#homepage">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="nav-icons">
        <button className="icon-button">
          <i className="fas fa-search"></i> {/* Search Icon */}
        </button>
        <button className="icon-button">
          <i className="fas fa-user"></i> {/* User Icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
