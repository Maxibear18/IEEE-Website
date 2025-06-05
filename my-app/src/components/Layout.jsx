import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import "./Layout.css"; // Import the CSS file
import whiteieee from '../images/white ieensm logo (1).png';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={whiteieee} className="whitelogo" alt="logo"/>
          </Link>
          <h1 className="nav-title">IEEE-NSM</h1>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button className="mobile-menu-btn">
            <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer (Optional) */}
      <footer className="footer">
        © 2023 MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;