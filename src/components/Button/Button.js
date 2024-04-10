import React from 'react';
import './Button.css';

function Button({ text }) {
  return (
    <button className='Button-Component'>{ text }</button>
  )
}

export default Button;
