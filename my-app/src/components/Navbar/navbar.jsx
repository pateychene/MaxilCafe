import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo_transparent.png'; // Importe le logo PNG
import './navbar.css'; // Importe les styles spécifiques à la Navbar

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img 
            src={logo} 
            width="40" 
            height="40" 
            className="d-inline-block align-top" 
            alt="Logo" 
          />
          Mon Bar/Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/assets/menu.pdf" target="_blank" rel="noopener noreferrer">Menus</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
