import React from 'react';

function Testimonial({ data }) {
  return (
    <div>
        { data.message }
        <div>
            <img src={ data.image } alt='Testimonial Profile' />
            <div>
                <p>{ data.name }</p>
                <p>{ data.position }</p>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
