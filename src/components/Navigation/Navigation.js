import React from 'react';

import Button from '../Button/Button';
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
        <span>Logo</span>
        <Button text="Contact Us" color='gradient' />
    </div>
  );
};

export default Navigation;
