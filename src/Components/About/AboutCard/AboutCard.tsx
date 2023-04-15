import React from 'react';
// import logo from './logo.svg';
import './AboutCard.css';

function AboutCard(props: any) {
    return (
        <div className="about-card">
            <div className='about-card-title'>
                {props.title}
            </div>
            <div className='about-card-title'>
                {props.desc}
            </div>            
        </div>
    );
}

export default AboutCard;
