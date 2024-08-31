import React, { useState, useRef, useEffect } from 'react';
import logo from "./images/logo_text.png";
import Bookshelf from './pages/bookshelf/bookshelf';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
    </Router>
  );
};

export default Navbar;