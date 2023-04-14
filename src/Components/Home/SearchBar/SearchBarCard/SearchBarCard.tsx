import React from 'react';
// import logo from './logo.svg';
import './SearchBarCard.css';

function SearchBarCard(props:any) {
  return (
    <div className="search-bar-card">
      <div className='search-bar-card-title'>
        {props.title}
        </div>
      

    <div className='search-bar-card-label'>
    {props.label}
    </div>
      
    </div>
  );
}

export default SearchBarCard;
