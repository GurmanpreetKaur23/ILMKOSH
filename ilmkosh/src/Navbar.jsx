import React, { useState, useRef, useEffect } from 'react';
import logo from "./images/logo_text.png";
import Bookshelf from './pages/bookshelf/bookshelf';
import Login from './pages/login'; // Ensure the correct import path and casing
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './pages/register';
import Hero from './main';
import Fiction from './pages/bookshelf/genres/fiction';
import Mystery from './pages/bookshelf/genres/mystery';
import SciFi from './pages/bookshelf/genres/sci-fi';
import Romance from './pages/bookshelf/genres/romance';
import Biography from './pages/bookshelf/genres/biography';
import History from './pages/bookshelf/genres/history';
import Philosophy from './pages/bookshelf/genres/philosophy';
import Poetry from './pages/bookshelf/genres/poetry';
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
        <Route path="/genre/fiction" element={<Fiction />} />
        <Route path="/genre/mystery" element={<Mystery />} />
        <Route path="/genre/sci-fi" element={<SciFi />} />
        <Route path="/genre/romance" element={<Romance />} />
        <Route path="/genre/biography" element={<Biography />} />
        <Route path="/genre/history" element={<History />} />
        <Route path="/genre/philosophy" element={<Philosophy />} />
        <Route path="/genre/poetry" element={<Poetry />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
