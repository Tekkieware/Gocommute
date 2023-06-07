import React from 'react'
import logo from '../images/Logo.png'
import {Navbar, Nav, Image, Container, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
        <Navbar expand="lg" sticky='top' collapseOnSelect>
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
             <Nav className="me-auto sections text-center text-lg-start">
             <LinkContainer to="/">
            <Nav.Link>Why Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>Testimonial</Nav.Link>
            </LinkContainer>
            
          </Nav>
          <Nav className="ms-auto pages text-center text-lg-start">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
            <Nav.Link>About Us</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="contact" className='d-block d-lg-none'>
              
            <Nav.Link><Button className='client'>Become a Client</Button></Nav.Link>
            </LinkContainer>  
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default Header