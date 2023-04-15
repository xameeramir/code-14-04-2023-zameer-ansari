import React from 'react';
// import logo from './logo.svg';
import './About.css';
import AboutCard from './AboutCard/AboutCard';

function About() {
    return (
        <div className="about">
            <h1>About us</h1>
            <p>Allow us to tell you a story...</p>

            <div className='about-cards'>
                <AboutCard title="Chapter 1" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                <AboutCard title="Chapter 2" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
            </div>

            <div className='about-cards'>
                <AboutCard title="Chapter 3" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                <AboutCard title="Chapter 4" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
            </div>
        </div>
    );
}

export default About;
