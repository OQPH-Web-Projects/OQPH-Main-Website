import React from 'react';
import './Footer.css';

import fullLogo from '../../assets/oqph-full-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const handleClick = e => {
    e.currentTarget.id === 'facebook' ? 
    window.open('https://www.facebook.com/onequantum.ph', '_blank'):
    window.open('https://www.linkedin.com/company/onequantum-ph', '_blank');
}

function Footer() {
  return (
    <div className='footer'>
        <img className='full-logo' src={fullLogo} alt='OneQuantum Philippines' />
        <div className='socials-container'>
            {/* Socials */}
            <button className='socials-button' id='facebook' onClick={handleClick}>
              <FaFacebookSquare className='socials-icon'/>
            </button>
            <button className='socials-button' id='linkedin' onClick={handleClick}>
              <IoLogoLinkedin className='socials-icon'/>
            </button>
        </div>
    </div>
  );
};

export default Footer;
