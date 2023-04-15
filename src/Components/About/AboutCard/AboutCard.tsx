import React from 'react';
// import logo from './logo.svg';
import './AboutCard.css';

function AboutCard(props: any) {
    return (
        <div className={`about-card about-card-${props.index}`}>
            <div className={`about-card-text about-card-text-${props.index}`}>
                <div className='about-card-title'>
                    {props.title}
                </div>
                <div className='about-card-desc'>
                    {props.desc}
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
