import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar2.css';

const NAV_LINKS = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About me' },
  { path: '/achievement', label: 'Achievement' },
  { path: '/extracurricular', label: 'Extracurricular' },
  { path: '/future', label: 'My future plan' },
  { path: '/thankyou', label: 'Thank you' },
];

const Navbar2: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar-retro-wrapper">
      
      {/* Nút Hamburger cho Mobile */}
      <button className="mobile-toggle-btn" onClick={toggleMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>

      {/* Danh sách Link */}
      <ul className={`navbar-retro-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.path} className="navbar-retro-item-container">
            <NavLink
              to={link.path}
              onClick={closeMenu}
              // Ghi đè logic: Nếu path là '/future' thì luôn gắn class 'active'
              className={({ isActive }) =>
                link.path === '/future' || isActive
                  ? 'nav-retro-item active'
                  : 'nav-retro-item'
              }
            >
              <span className="nav-retro-label">{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Overlay cho Mobile */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar2;