import React from 'react';
import './Testimonial.css'

function Testimonial({ data }) {
  return (
    <div className='Testimonial-Container'>
        { data.message }
        <div className='Profile-Container'>
            <img src={ data.image } alt='Testimonial Profile' />
            <div className='Text-Container'>
                <p className='Profile-Name'>{ data.name }</p>
                <p className='Profile-Position'>{ data.position }</p>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
