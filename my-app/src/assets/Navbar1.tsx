import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar1.css';

const NAV_LINKS = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About me' },
  { path: '/achievement', label: 'Achievement' },
  { path: '/extracurricular', label: 'Extracurricular' },
  { path: '/future', label: 'My future plan' },
  { path: '/thankyou', label: 'Thank you' },
];

const Navbar: React.FC = () => {
  // Trạng thái kiểm soát việc mở menu trên điện thoại
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar-wrapper">
      
      {/* Nút Hamburger (Chỉ hiển thị trên màn hình <= 480px) */}
      <button className="mobile-toggle-btn" onClick={toggleMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>

      {/* Danh sách các link */}
      <ul className={`navbar-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.path} className="navbar-item-container">
            <NavLink
              to={link.path}
              onClick={closeMenu} // Tự động đóng menu khi chọn xong trang
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <span className="nav-label">{link.label}</span>
              <div className="pin-decor" />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Lớp phủ màn hình tối đi khi mở menu (Tùy chọn) */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;