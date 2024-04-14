import React from 'react';
import './Button.css';

function Button({ text, color }) {
  return (
    <button className={`${color}-button`}>{ text }</button>
  )
}

export default Button;
