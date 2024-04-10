import React from 'react';

import Navigation from '../components/Navigation';
import Button from '../components/Button/Button';
import Testimonial from '../components/Testimonial/Testimonial';
import Partnership from '../components/Partnership';
import Question from '../components/Question/Question';

// Data files to display
import { testimonialData } from '../data/testimonialData';
import { partnershipData } from '../data/partnershipData';
import { questionData } from '../data/questionData';

function Home() {
	return (
		<div>
			<Navigation />

			{/* ==== Hero Section ==== */}
			<div>
				{/* 2-Column Section */}
				<div>
					<h1>Quantum Computing Philippines</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div>
						<Button text='Join Us' />
						<Button text='Learn More' />
					</div>
				</div>
				{/* Hero Image */}
				<div></div>
			</div>

			{/* ==== Credibility Section ==== */}
			<div>
				{/* Partnered Brands */}
				<div>
					<p>Our nationwide programs are made possible through the support of:</p>
					<div>
						{/* Brands Insert Here */}
					</div>
				</div>
				{/* 2-Column Section */}
				<div>
					<div>
						<p>Testimonials</p>
						<h2>Lorem Ipsum Dolor Sit</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
					</div>
					<div>
						{
							testimonialData.map((data, index) =>
								<Testimonial data={ data } key={ index } />
							)
						}
					</div>
				</div>
			</div>

			{/* ==== About Section ==== */}
			<div>
				{/* About Image */}
				<div></div>
				{/* About Text */}
				<div>
					<p>Testimonials</p>
					<h2>Lorem Ipsum Dolor Sit</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
					<div>
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
					<Button text='Join Us' />
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
				<p>Collaborations</p>
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

		</div>
	);
};

export default Home;
