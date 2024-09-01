import React from 'react'
import logo from "./images/logo_nobg.png";

const Hero = () => {
  return (
    <div className='hero-section'>
        <div >
            <img src={logo} alt="Logo" />
            <h1>TREASURE OF KNOWLEDGE</h1>
            <button>Get Started</button>
        </div>
      
    </div>
  )
}

export default Hero