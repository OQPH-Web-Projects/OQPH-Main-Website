import React from 'react';
import './Footer.css';

import fullLogo from '../../assets/oqph-full-logo.png'

function Footer() {
  return (
    <div className='footer'>
        <img className='full-logo' src={fullLogo} alt='OneQuantum Philippines' />
        <div>
            {/* Socials */}
        </div>
    </div>
  );
};

export default Footer;
