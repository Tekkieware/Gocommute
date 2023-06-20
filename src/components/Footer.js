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
              width="40"
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
          Departure Lobby, Murtala Muhammad International Airport, Lagos.</li>
        <li className='footer-list'>Phone: 07042408821, 08185823418</li>
        <li className='footer-list'>Email: travelenquiry@gocommute.com.ng</li>
      </ul>
      </Col>
      <Col md={4} className="footer pt-1">
      <h5>Services:</h5>  
      <ul>
        <LinkContainer to='/services/concierge'>
        <li className='footer-list footer-link'>VIP Concierge</li>
        </LinkContainer>
        <LinkContainer to="/services/document-procurement">
        <li className='footer-list footer-link'>Migration Consultancy & Document Procurement</li>
        </LinkContainer>
        <LinkContainer to="/services/passenger-support">
        <li className='footer-list footer-link'>Passenger Support</li>
        </LinkContainer>
      </ul>
      </Col>
      <Col md={4} className="footer pt-1">
      <h5>Social:</h5>  
      <ul>
        <a href='https://m.facebook.com/331797926899514/' target="_blank" rel="noreferrer">
        <li className='footer-list'><i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;Facebook</li>
        </a>
        
        <a href='https://wa.me/2347042408821' target="_blank" rel="noreferrer">
        <li className='footer-list'><i class="fa-brands fa-square-whatsapp fa-whatsapp"></i>&nbsp;WhatsApp</li>
        </a>
        <a href='https://www.instagram.com/biggiz_official/' target="_blank" rel="noreferrer">
        <li className='footer-list'><i class="fa-brands fa-instagram"></i>&nbsp;Instagram</li>
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