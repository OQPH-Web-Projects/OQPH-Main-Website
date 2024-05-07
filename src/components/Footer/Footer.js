import React from 'react';
import './Footer.css';

import fullLogo from '../../assets/oqph-full-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from 'react-icons/io5';

const handleClick = e => {
    const id = e.currentTarget.id;
    if (id === 'facebook') { window.open('https://www.facebook.com/OneQuantumPH', '_blank'); } 
    else if (id === 'linkedin') { window.open('https://www.linkedin.com/company/onequantum-ph', '_blank'); } 
    else { window.open('https://www.youtube.com/channel/UC-bh7mV66GxFw2Q7RcOaVMA', '_blank'); }
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
            <button className='socials-button' id='youtube' onClick={handleClick}>
              <IoLogoYoutube className='socials-icon'/>
            </button>
        </div>
    </div>
  );
};

export default Footer;
