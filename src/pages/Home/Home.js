import React from 'react';

// Components
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';
import Testimonial from '../../components/Testimonial/Testimonial';
import Partnership from '../../components/Partnership';
import Question from '../../components/Question/Question';
import Footer from '../../components/Footer';

// CSS files
import '../global.css';
import './Home.css';

// Images
import heroImage from '../../assets/hero-image.png';
import aboutImage from '../../assets/about-image.png';

// Data files to display
import { testimonialData } from '../../data/testimonialData';
import { partnershipData } from '../../data/partnershipData';
import { questionData } from '../../data/questionData';

function Home() {
	return (
		<div className='home-container'>
			<Navigation />

			{/* ==== Hero Section ==== */}
			<div className='two-column section'>
				{/* 2-Column Section */}
				<div className='hero-text column-1'>
					<h1>OneQuantum Philippines</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div className='hero-cta'>
						<Button text='Join Us' color='gradient' />
						<Button text='Learn More' color='outline' />
					</div>
				</div>
				{/* Hero Image */}
				<div className='hero-image column-2'><img src={ heroImage } alt='OneQuantum Philippines' /></div>
			</div>

			{/* ==== Credibility Section ==== */}
			<div className='credibility center'>
				{/* Partnered Orgs */}
				<div className='partnered-orgs'>
					<p>Our nationwide programs are made possible through the support of:</p>
					<div className='orgs'>
						{/* Brands Insert Here */}
					</div>
				</div>

				<div className='testimonials'>
					<div className='testimonial-text'>
						<p className='caption'>Testimonials</p>
						<h2>Lorem Ipsum Dolor Sit</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
					</div>
					<div className='testimonial-cards'>
						{
							testimonialData.map((data, index) =>
								<Testimonial data={ data } key={ index } />
							)
						}
					</div>
				</div>
			</div>

			{/* ==== About Section ==== */}
			<div className='two-column section'>
				{/* About Image */}
				<div className='column-1'><img src={ aboutImage } alt='About OneQuantum Philippines' /></div>
				{/* About Text */}
				<div className='about-text column-2'>
					<p className='caption'>About Us</p>
					<h2>OneQuantum Philippines</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div className='about-details'>
						<div>
							{/* Icon Here */}
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div>
							{/* Icon Here */}
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div>
							{/* Icon Here */}
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					<Button text='Join Us' color='gradient' />
				</div>
			</div>

			{/* ==== Detailed About Section ==== */}
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				{/* 3-Column Section */}
				<div>
					{/* 1st Column */}
					<div>
						<div>
							{/* Icon Here */}
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div>
							{/* Icon Here */}
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
					{/* 2nd Column */}
					<div>
						{/* Image Here */}
					</div>
					{/* 3rd Column */}
					<div>
						<div>
							{/* Icon Here */}
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						<div>
							{/* Icon Here */}
							<p>Lorem Ipsum</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</div>

			{/* ==== Collaboration Section ==== */}
			<div>
				<p className='caption'>Collaborations</p>
				<h2>Help us bring world-class programs nationwide:</h2>
				{/* Partnership CTAs */}
				<div>
					{
						partnershipData.map((data, index) => 
							<Partnership data={ data } key={ index } />
						)
					}
				</div>
			</div>

			{/* ==== FAQs ==== */}
			<div>
					<Question questions={questionData}/>
			</div>

			<Footer />

		</div>
	);
};

export default Home;
