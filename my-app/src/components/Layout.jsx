import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './Layout.css'; // We'll create this next

function Layout({ children }) {
  return (
    <div className="layout">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            YourLogo
          </Link>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          
          {/* Optional: Mobile menu button */}
          <button className="mobile-menu-button">
            <span className="menu-icon">☰</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;