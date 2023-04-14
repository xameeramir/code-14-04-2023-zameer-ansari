import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Explore from './Components/Explore/Explore';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Explore />
      <About />
      <Footer />
    </div>
  );
}

export default App;
