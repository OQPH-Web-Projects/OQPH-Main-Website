import React from 'react';

import Testimonial from '../components/Testimonial';

// Data files to display
import { testimonialData } from '../data/testimonialData';

function Home() {
  return (
    <div>
        {
            testimonialData.map((data) =>
                <Testimonial data={ data } />
            )
        }
    </div>
  );
};

export default Home;
