import React, { useState, useRef, useEffect } from 'react';
import logo from "./images/logo_text.png";
import Bookshelf from './pages/bookshelf/bookshelf';
import Login from './pages/login'; // Ensure the correct import path and casing
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './pages/register';
import Hero from './main';
const Navbar = () => {
  const [showBookshelf, setShowBookshelf] = useState(false);
  const bookshelfRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bookshelfRef.current && !bookshelfRef.current.contains(event.target)) {
        setShowBookshelf(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="navbar-container">
        <div className="navbar">
          <div className="cont1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="cont2">
            <Link to="/">Home</Link>
            <Link to="/recommended">Recommended</Link>
            <div
              className="bookshelf-trigger"
              onMouseEnter={() => setShowBookshelf(true)}
            >
              <p>Bookshelf</p>
            </div>
            <Link to="/my-library">My Library</Link>
          </div>
          <div className="cont3">
            <Link to="/get-started">Get Started</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        {showBookshelf && (
          <div 
            className="bookshelf-dropdown"
            ref={bookshelfRef}
            onMouseLeave={() => setShowBookshelf(false)}
          >
            <Bookshelf />
          </div>
        )}
      </div>
      
      <Routes>
        {/* Uncomment and adjust these routes as needed */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/main" element={<Hero />} /> {/* Add route for the main page */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookshelf" element={<Bookshelf />} /> {/* Bookshelf as a separate route */}
      </Routes>
    </Router>
  );
};

export default Navbar;
