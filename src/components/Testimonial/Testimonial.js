import React from 'react';

function Testimonial({ message, name, position }) {
  return (
    <div>
        { message }
        <div>
            {/* <img /> */} 
            <div>
                <p>{ name }</p>
                <p>{ position }</p>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
