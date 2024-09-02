import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'; // Import the CSS file

import logo from "./images/logo_nobg.png";

const Hero = () => {
  return (
    <div className='hero-section'>
      <style>
        {`
        .btn{
          padding: 10px 10px;
          border: ##513A34;
          border-radius: 2px;
          background-image: linear-gradient(to right, #EDE5D7 , #9B8A69);
          color: #543B34;
          cursor: pointer;
          font-weight:600;
          decoration=none;
          
        
        }

        `}
      </style>
        <div>
            <img src={logo} alt="Logo" />
            <h1>Treasure Of Knowledge</h1>
            <Link to="/new" className='btn'>Get Started</Link>        
            </div>
    </div>
  )
}

export default Hero;
