import React from 'react';

import Button from '../Button/Button';
import './Navigation.css';

import logo from '../../assets/oqph-logo.png';

function Navigation() {
  // Function for logo
  const toHome = () => {
    window.location.href = '/test-repo'
  };

  return (
    <div className='nav'>
      <div>
        <img className='logo' src={ logo } alt='OneQuantum Philippines' onClick={ toHome } />
        <a href='https://www.quantumcomputing.ph/' target='_blank' rel='noreferrer'>Blog</a>
        <a href='https://www.quantumcomputing.ph/workshop2024.html' target='_blank' rel='noreferrer'>Workshop</a>
      </div>
        <Button text="Contact Us" color='gradient' target='collaboration' />
    </div>
  );
};

export default Navigation;
