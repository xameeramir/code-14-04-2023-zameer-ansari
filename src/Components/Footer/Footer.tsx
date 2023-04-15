import React from 'react';
// import logo from './logo.svg';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-items'>
        <div className='logo'>Your Logo</div>        
        <div className='footer-company'>&copy; 2021 Company Name</div>
        <div className='footer-legal'>All rights reserved</div>
      </div>
      <div className='footer-items'>
        <div className='footer-item'>Explore</div>
        <div className='footer-item'>About Us</div>
        <div className='footer-item'>Cities</div>
        <div className='footer-item footer-item-outlined'>Call</div>
      </div>
    </ div>

  );
}

export default Footer;
