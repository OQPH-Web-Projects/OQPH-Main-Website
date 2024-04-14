import React from 'react';
import './Testimonial.css'

function Testimonial({ data }) {
  return (
    <div className='testimonial-container'>
        { data.message }
        <div className='profile-container'>
            <img src={ data.image } alt='Testimonial Profile' />
            <div className='text-container'>
                <p className='profile-name'>{ data.name }</p>
                <p className='profile-position'>{ data.position }</p>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
