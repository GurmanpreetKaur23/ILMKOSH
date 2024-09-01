// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "./images/logo_nobg.png";

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStarted = () => {
    navigate('/pages/register'); // Redirect to /pages/register when the button is clicked
  };

  return (
    <div className='hero-section'>
      <div>
        <img src={logo} alt="Logo" />
        <h1>TREASURE OF KNOWLEDGE</h1>
        <button onClick={handleGetStarted}>Get Started</button> {/* Button triggers the navigate function */}
      </div>
    </div>
  );
};

export default Hero;
