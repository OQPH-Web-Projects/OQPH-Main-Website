import React from 'react';

// Components
import Navigation from '../../components/Navigation/Navigation';
// import Footer from '../../components/Footer/Footer';

// Styles
import '../global.css';
import './Workshop.css';

export default function Workshop() {
    return (
        <div className='workshop-container'>

            <Navigation />
            <div className='hero section'>
                <h1>Algorithms and Programming</h1>
                <h1 className='workshop-title'>Workshop On Quantum Computing</h1>
                <p className='caption'>A Satellite Workshop of PCSC 2024, 12 May</p>
                {/* <Footer /> */}
            </div>
        </div>
    );
}