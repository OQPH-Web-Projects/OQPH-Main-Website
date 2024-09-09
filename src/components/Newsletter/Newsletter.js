import React from 'react';
import './Newsletter.css';
import '../../pages/global.css';
import Button from '../Button/Button';

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <p className='caption'>Newsletter</p>
          <h2 className="newsletter-heading">Sign up for our newsletter.</h2>
          <p className="newsletter-description">
            Do you want to stay updated with the most recent news about Quantum Computing and our upcoming events?
            Sign up for our newsletter and we will keep you informed.
          </p>
          <div className="newsletter-form">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="newsletter-input"
            />
            <Button text='Subscribe' color='gradient' target='#' />
          </div>
        </div>
      </div>
    </div>
  );
}
