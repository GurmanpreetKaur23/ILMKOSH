import React from 'react';
import background from "./images/bgImg.jpg"; // Ensure the path is correct and accessible
import './App.css';
import Navbar from './Navbar'; 


function App() {
  return (
    <>
      <div className='mainDiv' style={{ backgroundImage: `url(${background})` }}> {/* Corrected line */}
        <Navbar />
        {/* Your content here */}
      </div>
    </>
  );
}

export default App;
