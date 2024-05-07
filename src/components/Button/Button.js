import React from 'react';
import './Button.css';

function Button({ text, color, target }) {
  const handleClick = () => {
    if (target === 'contact') {
      window.open('https://www.quantumcomputing.ph/contact.html', '_blank');
    } else if (target === 'facebook') {
      window.open('https://www.facebook.com/onequantum.ph', '_blank');
    } else {
      scrollToSection();
    }
  };
  
  // Direct to Collaborations Section
  const scrollToSection = () => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={`${color}-button`} onClick={handleClick}>{ text }</button>
  );
};

export default Button;
