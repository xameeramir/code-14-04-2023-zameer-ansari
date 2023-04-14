import React from 'react';
// import logo from './logo.svg';
import './SearchBar.css';
import SearchBarCard from './SearchBarCard/SearchBarCard';
import SearchBox from './SearchBox/SearchBox';

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchBarCard title="CITY" label="Select your city"/>
      <SearchBarCard title="DATES" label="Select your dates"/>
      <SearchBarCard title="GUESTS" label="Add guests"/>
      <SearchBox />
    </div>
  );
}

export default SearchBar;
