import React from 'react';
// import logo from './logo.svg';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='nav-items'>
        <div className='logo'>Your Logo</div>
      </div>
      <div className='nav-items'>
        <div className='nav-item'>Explore</div>
        <div className='nav-item'>About Us</div>
        <div className='nav-item'>Cities <span className='cities-dropdown' /> </div>
        <div className='nav-item nav-item-outlined'>Call</div>
      </div>
    </ div>

  );
}

export default Footer;
