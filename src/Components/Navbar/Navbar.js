import React from 'react';
import './Navbar.css';
import logo from './../../assets/logo.png';
import configs from '../../config';

function Navbar(props) {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="app__logo" height='50px' width='30px'/>
      </div>
      <div className="app__navbar-title">{(configs.ORG_NAME).toUpperCase()}</div>
    </nav>
  );
};

export default Navbar;