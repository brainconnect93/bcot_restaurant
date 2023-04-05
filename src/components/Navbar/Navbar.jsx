import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { gericht } from '../../constants/images';

import './Navbar.css';

const Navbar = () => (
  <>
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={gericht} alt="app logo" />
      </div>
      <ul className="app_navbar-links">
        <li className="p_opensans"><a href="#home">Home</a></li>
        <li className="p_opensans"><a href="#about">About</a></li>
        <li className="p_opensans"><a href="#menu">Menu</a></li>
        <li className="p_opensans"><a href="#awards">Awards</a></li>
        <li className="p_opensans"><a href="#contact">Contact</a></li>
      </ul>

      <div className="app_navbar-login">
        <a href="#login" className="p_opensans">Log In / Register</a>
        <div />
        <a href="#book" className="p_opensans">Book Table</a>
      </div>
    </nav>
  </>
);

export default Navbar;
