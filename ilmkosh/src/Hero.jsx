import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../images/logo_nobg.png";

const Hero = () => {
  return (
    <div className='hero-section'>
      <div>
        <img src={logo} alt="Logo" />
        <h1>TREASURE OF KNOWLEDGE</h1>
        <Link to="/get-started"> 
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;