import React from 'react';
// import logo from './logo.svg';
import './ExploreCard.css';

function ExploreCard(params: any) {
    return (
        <div className="explore-card">
            <div className='explore-card-body'>

                <div className='explore-card-desc'>
                    <div className='explore-card-title'>
                        {params.title}
                    </div>
                    <div className='explore-cards'>
                        <div className='explore-card-info'>
                            {params.cost}
                        </div>

                        <div className='explore-card-info'>
                            {params.area}
                        </div>

                        <div className='explore-card-info explore-card-book'>
                            Book!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreCard;
