import React from 'react';
import background from "./images/bgImg.jpg";
import './App.css';
import Navbar from './Navbar'; 

// import Hero from './Hero';

function App() {
  return (
    <>
      <div className='mainDiv' style={{ backgroundImage: `url(${background})`}}>
        <Navbar />
        
      </div>
    </>
    
  );
}

export default App;