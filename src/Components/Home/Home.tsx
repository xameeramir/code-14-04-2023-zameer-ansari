import React from 'react';
// import logo from './logo.svg';
import './Home.css';
import SearchBar from './SearchBar/SearchBar';
import Nav from './NavBar/NavBar';

function Home() {
  return (
    <div className="home">
      <Nav />
      <div className='slogan'>
        <h1>Rethink your living & renting</h1>
        <h6>Make your stay painless with us</h6>
      </div>
      <SearchBar />
    </div>
  );
}

export default Home;
