import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import whiteieee from '../images/white ieensm logo (1).png';
import insta from '../images/Group 3.png';
import linkedin from '../images/image 10.png';
import discord from '../images/image 11.png';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo and Title Group */}
          <div className="logo-title-group">
            <Link to="/" className="nav-logo">
              <img src={whiteieee} className="whitelogo" alt="logo"/>
            </Link>
            <h1 className="nav-title">IEEE-NSM</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
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

      {/* Footer with Social Icons */}
      <footer className="footer">
  <div className="footer-content">
    <div className="logo-title-group">
      <Link to="/" className="nav-logo">
        <img src={whiteieee} className="whitelogo" alt="logo"/>
      </Link>
      <h1 className="nav-title">IEEE-NSM</h1>
    </div>
    <div className="social-icons">
      <a href="https://www.instagram.com/ieee_nsm/" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="Instagram" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/company/ieee-nsm/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://discord.gg/nXx9UtEeyy" target="_blank" rel="noopener noreferrer">
        <img src={discord} alt="Discord" className="social-icon" />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Layout;