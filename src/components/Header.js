import React from 'react'
import logo from '../images/Logo.png'
import {Navbar, Nav, Image, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
        <Navbar expand="lg" collapseOnSelect>
          <Container>
        <LinkContainer to="/">  
        <Navbar.Brand>
            <Image 
              src={logo}
              width="45"
              className="d-inline-block align-top img-fluid"
              alt="Knight services logo"
            /> 
            <span>Gocommute</span>
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
             <Nav className="me-auto">
             <LinkContainer to="/">
            <Nav.Link>Why us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>testimonial</Nav.Link>
            </LinkContainer>
            
          </Nav>
          <Nav className="ms-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
            <Nav.Link>About Us</Nav.Link>
            </LinkContainer>  
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default Header