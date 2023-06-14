import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import logo from '../images/Logo.png'
import {LinkContainer} from 'react-router-bootstrap'

function Footer() {
  return (
    <Container fluid className='footer'>
      <Container className='footer'>
      <Row className='footer'>
        <Col md={12} className='footer'>
        <Image 
              src={logo}
              width="70"
              className="d-inline-block align-top footer-logo"
              alt="Knight services logo"
            />
            </Col>

      </Row> 
      <Row>
      <Col md={4} className="footer pt-1">
      <h5>Contact Information:</h5>  
      <ul>
        <li className='footer-list'>Address: Gocommute Travels
          Departure Lobby, Muritala Muhammad International Airport, Lagos.</li>
        <li className='footer-list'>Phone: 07042408821, 08185823418</li>
        <li className='footer-list'>Email: email</li>
      </ul>
      </Col>
      <Col md={4} className="footer pt-1">
      <h5>Quick Links:</h5>  
      <ul>
        <LinkContainer to='/'>
        <li className='footer-list footer-link'>Home</li>
        </LinkContainer>
        <LinkContainer to="/about">
        <li className='footer-list footer-link'>About Us</li>
        </LinkContainer>
        <LinkContainer to="/contact">
        <li className='footer-list footer-link'>Contact Us</li>
        </LinkContainer>
      </ul>
      </Col>
      <Col md={4} className="footer pt-1">
      <h5>Social:</h5>  
      <ul>
        <a href='https://www.facebook.com/profile.php?id=100090989649926' target="_blank" rel="noreferrer">
        <li className='footer-list'><i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;Facebook</li>
        </a>
        <a href='https://wa.me/2348082328425' target="_blank" rel="noreferrer">
        <li className='footer-list'><i class="fa-brands fa-square-whatsapp fa-whatsapp"></i>&nbsp;WhatsApp</li>
        </a>
        <a href='https://www.linkedin.com/company/knight-corporate-services-ltd/' target="_blank" rel="noreferrer">
        <li className='footer-list'><i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn</li>
        </a>
      </ul>
      </Col>
      
      </Row> 
      <Row className='text-center copy'>
        <Col className='copy'>
        Copyrights &copy; Gocommute 2023.
        </Col>
      </Row>
      </Container>  
      
      </Container>
  )
}

export default Footer