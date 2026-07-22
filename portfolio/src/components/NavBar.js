import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa"; 
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Row className="align-items-center w-100">
          {/* Navbar Brand with Hamburger Icon aligned next to it */}
          <Col md={3} className="text-start d-flex align-items-center">
            <Navbar.Brand href="/">
              <span className="navbar-name">Bhawna Anand</span>
            </Navbar.Brand>
            {/* Hamburger icon (FaBars) and close icon (FaTimes) */}
            <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" className="ms-auto">
              {isMenuOpen ? (
                <FaTimes size={30} className="toggle-icon" /> 
              ) : (
                <FaBars size={30} className="toggle-icon" />   
              )}
            </Navbar.Toggle>
          </Col>

          {/* Collapsible Menu */}
          <Col md={9}>
            <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
              <Nav className="me-auto justify-content-center">
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#connect" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Get in Touch</Nav.Link>
              </Nav>

              {/* Social Icons (Moved to collapse area) */}
              <div className="social-icon d-flex justify-content-center ">
                <a href="https://www.linkedin.com/in/bhawnaanand" target="_blank" rel="noreferrer" className="me-3">
                  <FaLinkedin size={20} className="icon" />
                </a>
                <a href="https://leetcode.com/itsbhh" target="_blank" rel="noreferrer" >
                  <FaLaptopCode size={20} className="icon" />
                </a>
                <a href="https://github.com/itsbhh" target="_blank" rel="noreferrer">
                  <FaGithub size={20} className="icon" />
                </a>
              </div>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
