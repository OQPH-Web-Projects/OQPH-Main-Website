import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
  const center = [52.22977, 21.01178];

  const committeeMembers = [
    {
      name: 'Jeffrey Aborot',
      affiliation: 'Advanced Science, and Technology Institute - DOST',
    },
    {
      name: 'Henry Adorna',
      affiliation: 'University of the Philippines Diliman (co-Chair)',
    },
    {
      name: 'Richard Bryann Chua',
      affiliation: ' University of the Philippines Manila',
    },
    { name: 'Bobby Corpus	', affiliation: 'One Quantum PH (co-Chair)' },
    {
      name: 'Eric Galapon',
      affiliation: 'National Institute of Physics',
    },
    {
      name: 'Lucky Galvez',
      affiliation: 'Institute of Mathematics, UPDiliman',
    },
    {
      name: 'Dylan Josh Lopez',
      affiliation: 'Chung Yuan Christian University',
    },
    {
      name: 'Elmer Peramo',
      affiliation: 'Advanced Science, and Technology Institute - DOST',
    },
    { name: 'Jacqui Romero', affiliation: 'The University of Queensland' },
  ];
  const pillData = [
    { time: '07:00', program: 'Registration and Welcome Coffee' },
    { time: '08:00', program: 'Opening and Welcome Remarks' },
    { time: '08:45', program: 'Coffee Break' },
    { time: '09:00', program: 'Workshop Activities' },
    { time: '12:00', program: 'Lunch Break' },
    { time: '01:00', program: 'Keynote' },
    { time: '02:00', program: 'Paper Presentations' },
    { time: '03:00', program: 'Coffee Break' },
    { time: '04:00', program: 'Closing Ceremonies' },
    { time: '05:00', program: 'End' },
  ];

  animation('.hidden');

  return (
    <div className='workshop-container'>
      <Navigation />
      <div className='hero section'>
        <h1 className='hidden'>Algorithms and Programming</h1>
        <h1 className='workshop-title hidden'>Workshop On Quantum Computing</h1>
        <p className='caption hidden'>
          A Satellite Workshop of PCSC 2024, 12 May
        </p>
        {/* <Footer /> */}
      </div>

      <section className='workshop-section'>
        <div className='about-workshop'>
          <p className='caption'>About the Workshop</p>
          <div className='about-workshop-content hidden'>
            <p className='about-workshop-content'>
              This workshop intends to introduce the computing community in the
              country to Quantum Computing. The main goal of the workshop is to
              put together in one venue individuals who are working on,
              interested in, and curious about quantum computing, its power to
              solve interesting problems and its limitations.
            </p>
            <p className='about-workshop-content'>
              We hope to provide a friendly atmosphere during the workshop for
              individuals or group of individuals to share their output and
              experiences working on quantum computing. This maiden workshop
              aims to prepare participants in understanding and appreciation of
              the power of quantum computing through a short tutorial on quantum
              algorithm and programming.
            </p>
          </div>
          <div className='workshop-buttons'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSftBHUVEBP8WiiFbRQA7dDDLvRUFuEALdTDBxJdBW_bN2y-Xg/viewform'
              target='_blank'
              rel='noreferrer'
            >
              <Button
                text='Register Now'
                color='gradient'
                target='registration'
              />
            </a>
          </div>
        </div>
      </section>

      <section className='workshop-venue-wrapper'>
        <div className='workshop-venue'>
          <p className='caption'>Venue</p>
          <h4>Adventist University of the Philippines, Silang Cavite</h4>
          <div className='venue-map'>
            <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
            </MapContainer>
          </div>
          <div className='venue-content'>
            <p className='venue-content'>
              The workshop will be held at Adventist University of the
              Philippines (AUP), Silang Cavite as part of the Philippine
              Computing Science Congress (PCSC), the premier annual computing
              conference in the Philippines. AUP is about 18 minutes ride by
              car/public transport from DLSU Laguna Campus, in the direction
              towards Tagaytay City.
            </p>
          </div>
        </div>
      </section>

      <div className='speaker-section'>
        <div>
          <img alt='keynote speaker' />
        </div>
        <div className='hidden'>
          <p className='caption'>our keynote speaker</p>
          <h3>David Earl Robles</h3>
          <h4>
            Lattice Cryptography: Theory, Applications, and Standardization
            Efforts
          </h4>
          <p>
            This presentation provides a mathematical introduction to lattice
            cryptography, exploring its theoretical underpinnings, practical
            applications, and ongoing standardization initiatives. Lattice
            cryptography stands as a bedrock for many next- generation
            post-quantum cryptographic protocols, as evidenced by the recent
            draft documents published by the National Institute of Standards and
            Technology (NIST) in November 2023...
          </p>
        </div>
      </div>

      <section className='program-committee-wrapper'>
        <div className='program-committee'>
          <p className='caption'>Program Committee</p>
          <p className='program-committee-description'>
            These are the program committee members for the workshop.
          </p>

          <div className='program-committee-members'>
            {committeeMembers.map((member, index) => (
              <div className='committee-member' key={index}>
                <img src='your-image-path.jpg' alt='picture' />
                <div className='text-container'>
                  <p className='committee-member-name'>{member.name}</p>
                  <p className='committee-member-affiliation'>
                    {member.affiliation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='workshop-section'>
        <div className='abstract-submission'>
          <p className='caption'>Submission of Abstract</p>
          <div className='abstract-submission-content'>
            <p className='abstract-submission-content'>
              We invite everyone who have been working on quantum computing to
              submit an Extended Abstract of their work with at most three (3)
              pages long. The Extended Abstract must contain (a) the problem you
              intend to consider/solve in your work; (b) quantum computing
              technique you used in solving the problem; (c) the results of your
              computation/simulations, and (d) finally your conclusion. Please
              use the following template for the Extended Abstract, which can be
              obtained from here.
            </p>
            <p className='abstract-submission-content'>
              We invite submissions of works-in-progress, interactive /
              simulation demos, and position papers that contribute to the
              advancement of Quantum Information, Communication, and Technology
              (QICT) research in the Philippines.
            </p>
          </div>
        </div>
        <div className='workshop-buttons'>
          <a href=''>
            <Button text='Submit' color='gradient' target='/' />
          </a>
        </div>
      </section>

      <section className='program-flow-wrapper'>
        <div className='program-flow'>
          <p className='caption'>Program Flow</p>
          <div className='program-flow-content'>
            <div className='pills-container'>

              {/* Left-aligned pills */}
              <div className='left-pills'>
                {pillData.slice(0, 5).map((data, index) => (
                  <div className='pill' key={index}>
                    <div className='dot'></div>
                    <div className='content'>
                      <p className='time'>{data.time}</p>
                      <p className='program'>{data.program}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Right-aligned pills */}
              <div className='right-pills'>
                {pillData.slice(5).map((data, index) => (
                  <div className='pill' key={index}>
                    <div className='dot'></div>
                    <div className='content'>
                      <p className='time'>{data.time}</p>
                      <p className='program'>{data.program}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
