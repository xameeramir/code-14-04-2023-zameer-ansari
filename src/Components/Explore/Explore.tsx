import React from 'react';
// import logo from './logo.svg';
import './Explore.css';
import ExploreCard from './ExploreCard/ExploreCard';

function Explore() {
    return (
        <div className="explore">
            <h1>Explore</h1>
            <p>From one-guest rooms to penthouses with pools and gardens</p>
            
        <div className='explore-cards'>
                        
        <ExploreCard
                title="Room with one king-size bed"
                cost="35$"
                area="28м²" />
            
            <ExploreCard
                title="Penthouse for 8 person"
                cost="2039$"
                area="438Fм²" />

        </div>
        </div>
    );
}

export default Explore;
