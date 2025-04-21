import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaChevronDown } from 'react-icons/fa';
import logo from './images/logo.png';
import './Navbar.css';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="navbar-section">
      <nav className="navbar navbar-expand-lg container-fluid">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo-image" alt="LKR Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">

              {/* Dropdown - Getting Started */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" onClick={() => toggleDropdown('started')}>
                  Getting Started <FaChevronDown className={openDropdown === 'started' ? 'rotated' : ''} />
                </span>
                <ul className={`dropdown-menu vertical-dropdown ${openDropdown === 'started' ? 'show' : ''}`}>
                  <li className="dropdown-item" onClick={() => handleNavigate('/imports-exports-procedure')}>Import & Exports Procedure in India</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/what-does-it-cost')}>What Does it Cost</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/how-import-works')}>How Import Works</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/factory-visits')}>Factory Visits</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/our-pricing')}>Our Pricing</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/mixed-container-services')}>Mixed Container Services</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/mixed-air-services')}>Mixed Air Services</li>
                </ul>
              </li>

              {/* Dropdown - 6 Steps of Our Services */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" onClick={() => toggleDropdown('services')}>
                  6 Steps of Our Services <FaChevronDown className={openDropdown === 'services' ? 'rotated' : ''} />
                </span>
                <ul className={`dropdown-menu vertical-dropdown ${openDropdown === 'services' ? 'show' : ''}`}>
                  <li className="dropdown-item" onClick={() => handleNavigate('/product-sourcing')}>Product Sourcing</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/confirming-sample')}>Confirming the Sample</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/order-production')}>Order & Production Follow Up</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/quality-inspection')}>Quality Inspection</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/consolidation-warehousing')}>Consolidation & Warehousing</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/shipping-customs')}>Shipping & Customs Clearance</li>
                </ul>
              </li>

              {/* Dropdown - About */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" onClick={() => toggleDropdown('about')}>
                  About <FaChevronDown className={openDropdown === 'about' ? 'rotated' : ''} />
                </span>
                <ul className={`dropdown-menu vertical-dropdown ${openDropdown === 'about' ? 'show' : ''}`}>
                  <li className="dropdown-item" onClick={() => handleNavigate('/our-story')}>Our Story</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/why-us')}>Why Us</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/contact')}>Contact</li>
                </ul>
              </li>

              {/* Dropdown - Sourcing */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" onClick={() => toggleDropdown('sourcing')}>
                  Sourcing <FaChevronDown className={openDropdown === 'sourcing' ? 'rotated' : ''} />
                </span>
                <ul className={`dropdown-menu vertical-dropdown ${openDropdown === 'sourcing' ? 'show' : ''}`}>
                  <li className="dropdown-item" onClick={() => handleNavigate('/home-furniture')}>Home Furniture</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/planning-design')}>Planning & Design</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/kitchens-wardrobes')}>Kitchens & Wardrobes</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/builders-projects')}>Builders Projects</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/floors-walls')}>Floors & Walls</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/office-furniture')}>Office Furniture</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/school-furniture')}>School Furniture</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/restaurant-furniture')}>Restaurant Furniture</li>
                  <li className="dropdown-item" onClick={() => handleNavigate('/hotel-furniture')}>Hotel Furniture</li>
                </ul>
              </li>

              {/* Blog & Contact */}
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;

