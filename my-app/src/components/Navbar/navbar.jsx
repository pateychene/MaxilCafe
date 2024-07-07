import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/Logoblack.png';
import './navbar.css';

function CustomNavbar() {



  const handleMouseEnter = () => {
    // Ajouter ici un traitement supplémentaire si nécessaire
  };

  return (
    <Navbar expand="lg" className="navbar-dark bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img 
            src={logo} 
            width="150" 
            height="80" 
            className="d-inline-block align-top" 
            alt="Logo" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown 
              title="Menus" 
              id="basic-nav-dropdown"
              className="dropdown-menu-right"
              onMouseEnter={handleMouseEnter}
            >
              <NavDropdown.Item 
                href="/pdf/Menu web.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Menu midi/soir
              </NavDropdown.Item>
              <NavDropdown.Item 
                href="/pdf/CVPATEYCHB.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Cartes des vins
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
