import React, { useState } from 'react'; 
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';  
import logo from './images/logo.png'; 
import './Navbar.css'; 

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  // Navigation Handler
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  // Toggle dropdown on arrow click
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
  <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>

  <div className="sidebar-section">
    <div className="sidebar-title" onClick={() => toggleDropdown('started')}>
      Getting Started
      <FaChevronDown className={openDropdown === 'started' ? 'rotated' : ''} />
    </div>
    {openDropdown === 'started' && (
      <div className="sidebar-links">
        <div onClick={() => handleNavigate('/imports-exports-procedure')}>Import & Export Procedure</div>
        {/* Add other links here */}
      </div>
    )}
  </div>

  {/* Repeat the structure for other dropdowns */}
</div>

  return (
    <Navbar expand="lg" className="py-3 custom-navbar">

      {/* Logo Section */}
      <Container fluid className="d-flex justify-content-between align-items-center">
    <Navbar.Brand href="/" className="logo-left">
      <img src={logo} alt="LKR Imports & Exports" className="logo-img" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center nav-bar-custom">

          {/* Getting Started Dropdown */}
          <NavDropdown
            title={
              <span>
                Getting Started
                <FaChevronDown 
                  style={{ 
                    marginLeft: '20px', 
                    transform: openDropdown === 'started' ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.3s ease' 
                  }} 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('started');
                  }}
                />
              </span>
            }
            id="nav-dropdown-started"
            className="vertical-dropdown"
          >
            <NavDropdown.Item onClick={() => handleNavigate('/imports-exports-procedure')}>Import & Exports Procedure in India</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/what-does-it-cost')}>What Does it Cost</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/how-import-works')}>How Import Works</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/factory-visits')}>Factory Visits</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/our-pricing')}>Our Pricing</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/mixed-container-services')}>Mixed Container Services</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/mixed-air-services')}>Mixed Air Services</NavDropdown.Item>
          </NavDropdown>

          {/* 6 Steps of Our Services Dropdown */}
          <NavDropdown
            title={
              <span>
                6 Steps of Our Services
                <FaChevronDown 
                  style={{ 
                    marginLeft: '20px', 
                    transform: openDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.3s ease' 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('services');
                  }}
                />
              </span>
            }
            id="nav-dropdown-services"
            className="vertical-dropdown"
          >
            <NavDropdown.Item onClick={() => handleNavigate('/product-sourcing')}>Product Sourcing</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/confirming-sample')}>Confirming the Sample</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/order-production')}>Order & Production Follow Up</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/quality-inspection')}>Quality Inspection</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/consolidation-warehousing')}>Consolidation & Warehousing</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/shipping-customs')}>Shipping & Customs Clearance</NavDropdown.Item>
          </NavDropdown>

          {/* About Dropdown */}
          <NavDropdown
            title={
              <span>
                About
                <FaChevronDown 
                  style={{ 
                    marginLeft: '20px', 
                    transform: openDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.3s ease' 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('about');
                  }}
                />
              </span>
            }
            id="nav-dropdown-about"
            className="vertical-dropdown"
          >
            <NavDropdown.Item onClick={() => handleNavigate('/our-story')}>Our Story</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/why-us')}>Why Us</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/contact')}>Contact</NavDropdown.Item>
          </NavDropdown>

          {/* Sourcing Dropdown */}
          <NavDropdown
            title={
              <span>
                Sourcing
                <FaChevronDown 
                  style={{ 
                    marginLeft: '20px', 
                    transform: openDropdown === 'sourcing' ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.3s ease' 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('sourcing');
                  }}
                />
              </span>
            }
            id="nav-dropdown-sourcing"
            className="vertical-dropdown"
          >
            <NavDropdown.Item onClick={() => handleNavigate('/home-furniture')}>Home Furniture</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/planning-design')}>Planning & Design</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/kitchens-wardrobes')}>Kitchens & Wardrobes</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/builders-projects')}>Builders Projects</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/floors-walls')}>Floors & Walls</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/office-furniture')}>Office Furniture</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/school-furniture')}>School Furniture</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/restaurant-furniture')}>Restaurant Furniture</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('/hotel-furniture')}>Hotel Furniture</NavDropdown.Item>
          </NavDropdown>

          {/* Blog */}
          <Nav.Link onClick={() => handleNavigate('/blog')} className="nav-item">
            Blog
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default CustomNavbar;
