import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Navbar.css';

const CustomNavbar = ({ heroHeight }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroHeight]);

  const handleNavClick = (id) => {
    setActiveLink(id);
  };

  return (
    <Navbar className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/av-logo.png`}
            alt="AV Built Construction Logo"
            height="50"
            className="d-inline-block align-middle"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center text-lg-end">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={activeLink === 'services' ? 'active' : ''}
              onClick={() => handleNavClick('services')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
