import React, { useState } from 'react';
import './Newsletter.css';
import '../../pages/global.css';
import Button from '../Button/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

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
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button text='Subscribe' color='gradient' type="submit" />
          </form>
          {message && <p className="newsletter-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}