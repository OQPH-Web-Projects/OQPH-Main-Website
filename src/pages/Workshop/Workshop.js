import React from 'react';

// Components
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

// Styles
import '../global.css';
import './Workshop.css';

// Animation
import animation from '../animation';

export default function Workshop() {
    animation('.hidden');

    return (
        <div className='workshop-container'>

            <Navigation />
            <div className='hero section'>
                <h1 className='hidden'>Algorithms and Programming</h1>
                <h1 className='workshop-title hidden'>Workshop On Quantum Computing</h1>
                <p className='caption hidden'>A Satellite Workshop of PCSC 2024, 12 May</p>
                {/* <Footer /> */}
            </div>

            <div className='about-workshop'>
                <p className='caption'>About the Workshop</p>
                <div className='about-workshop-content hidden'>
                    <p className='about-workshop-content'>
                    This workshop intends to introduce the computing community in the country to Quantum Computing. The main goal of the workshop is to put together in one venue individuals who are working on, interested in, and curious about quantum computing, its power to solve interesting problems and its limitations. 
                    </p>
                    <p className='about-workshop-content'>
                    We hope to provide a friendly atmosphere during the workshop for individuals or group of individuals to share their output and experiences working on quantum computing. This maiden workshop aims to prepare participants in understanding and appreciation of the power of quantum computing through a short tutorial on quantum algorithm and programming.
                    </p>
                </div>
            </div>
            <div className='workshop-buttons'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSftBHUVEBP8WiiFbRQA7dDDLvRUFuEALdTDBxJdBW_bN2y-Xg/viewform' target='_blank' rel='noreferrer'>
                    <Button text='Register Now' color='gradient' target='registration' />
                </a>
            </div>

            <div className='speaker-section'>
                <div>
                    <img alt='keynote speaker' />
                </div>
                <div className='hidden'>
                    <p className='caption'>our keynote speaker</p>
                    <h3>David Earl Robles</h3>
                    <h4>Lattice Cryptography: Theory, Applications, and Standardization Efforts</h4>
                    <p>This presentation provides a mathematical introduction to lattice cryptography, exploring its theoretical underpinnings, practical applications, and ongoing standardization initiatives. Lattice cryptography stands as a bedrock for many next- generation post-quantum cryptographic protocols, as evidenced by the recent draft documents published by the National Institute of Standards and Technology (NIST) in November 2023...</p>
                </div>
            </div>

            <Footer />

        </div>
    );
}