import React, {useEffect, useState} from 'react'
import logo from '../images/Logo.png'
import {Navbar, Nav, Image, Container, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';


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
           <Nav className="me-auto sections">
          
            <Nav.Link active={false} href='#whyus'>Why Us</Nav.Link>
            <Nav.Link active={false} href='#feedback'>Customer Feedback</Nav.Link>
            
          </Nav>
            
          <Nav className="ms-auto pages">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>  
            <NavDropdown title="Services" id="basic-nav-dropdown">
            <LinkContainer to="services/concierge">
              <NavDropdown.Item>VIP Concierge Service</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="services/passenger-support">
              <NavDropdown.Item>
                Passenger Support
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="services/document-procurement">
              <NavDropdown.Item>Migration Consultancy & <br />Document Procurement</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="services/hotel">
              <NavDropdown.Item>Hotel</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="services/tour">
              <NavDropdown.Item>Tour</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
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