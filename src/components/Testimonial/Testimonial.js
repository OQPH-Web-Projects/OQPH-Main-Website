import React from 'react';

// CSS files
import '../../pages/global.css';
import './Testimonial.css'

function Testimonial({ data }) {
  return (
    <div className='testimonial-container'>
        <div className='message-container'>
          <p className='message'>{ data.message }</p>
        </div>
        <div className='profile-container'>
            {/* <img src={ data.image } alt='Testimonial Profile' /> */}
            <div className='text-container'>
                <p className='subheading'>{ data.name }</p>
                <p>{ data.position }</p>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
