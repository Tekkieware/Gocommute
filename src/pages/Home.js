import React from 'react'
import HeroCard from '../components/HeroCard'
import {Container, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'

function Home() {
  return (
    <div>
      <HeroCard/>
      <Container fluid className='body pb-4'>
        <Container>
          <div className='hero-tab'>
      <Tabs
      defaultActiveKey="flight"
      id="uncontrolled-tab-example"
      fill
    >
      <Tab eventKey="flight" title="Flight" className='py-3'>
        <Container>
        <Row>
          <Col>
          <i class="fa-solid fa-globe"></i> Passport Processing
          </Col>
          <Col>
          <i class="fa-solid fa-passport"></i> Ticket Booking
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-certificate"></i> NDLEA Clearance Certificate
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-registered"></i> E-mmigrant Registration
          </Col>
        </Row>
        <Row>
          <Col className='text-center pt-2'>
          <Button>Start Now</Button>
          </Col>
        </Row>
        </Container>

      </Tab>
      <Tab eventKey="hotel" title="Hotel" className='py-3'>
        <Container>
        <Row>
          <Col>
          <i class="fa-solid fa-hotel"></i> Reservations
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-utensils"></i> Dining Facilities
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-handshake"></i> Business Conference Facilities
          </Col>
          <Col>
          <i class="fa-solid fa-car"></i> Shuttle Service
          </Col>
        </Row>
        <Row className='text-center pt-2'> 
          <Col>
          <Button>Reserve Now</Button>
          </Col>
        </Row>
        </Container>
      </Tab>
      <Tab eventKey="tour" title="Tour" className='py-3'>
      <Container>
        <Row>
          <Col>
          <i class="fa-solid fa-eye"></i> Sightseeing
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-person-biking"></i> Adventure
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-person-hiking"></i> Day Trips
          </Col>
          <Col>
          <i class="fa-solid fa-building-columns"></i> Cultural Walking Tours
          </Col>
        </Row>
        <Row className='text-center pt-2'> 
          <Col>
          <Button>Book Now</Button>
          </Col>
        </Row>
        </Container>
      </Tab>
      <Tab eventKey="concierge" title="Concierge" className='py-3'>
      <Container>
        <Row>
          <Col>
          <i class="fa-solid fa-plane"></i> Private Jets
          </Col>
          <Col>
          <i class="fa-solid fa-user-secret"></i> Security Service
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-person-walking-luggage"></i> Airport Assistance
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-cart-shopping"></i> Shopping Service
          </Col>
        </Row>
        <Row className='text-center pt-2'> 
          <Col>
          <Button>Contact Us Now</Button>
          </Col>
        </Row>
        </Container>
      </Tab>
    </Tabs>
    </div>
        </Container>

      </Container>
      <Container fluid className='white-section py-3'>
        <Container>
      <Row>
          <h1>Stress-Free Travel!!!</h1>
        </Row>
        <Row>
          <Col md={6}>
            
          </Col>
          <Col md={6}>
            <Row>
              <h2>Expertly Managed Flight Reservations</h2>
              
            </Row>
            <Row>
            <p>Our expert team takes care of every detail, ensuring flawlessly managed flight reservations for your ultimate travel convenience and peace of mind.</p>
            </Row>
            <Row>
              <h2>Hassle-Free Visa and Passport Assistance</h2>
              
            </Row>
            <Row>
            <p>Our visa and passport assistance service takes the stress out of the application process, providing seamless support to ensure your travel documents are obtained effortlessly and efficiently.</p>
            </Row>
            <Row>
              <h2>Reliable Guidance from Departure to Arrival</h2>
              
            </Row>
            <Row>
            <p>You can trust us to be your dependable travel companion, offering support, assistance, and expertise throughout your journey to make it smooth, enjoyable, and worry-free.</p>
            </Row>
          </Col>
        </Row>
        
        </Container>
        <Container>
      <Row>
          <h1>Exclusivity Redefined!!!</h1>
        </Row>
        <Row>
          <Col md={6}>
            
          </Col>
          <Col md={6}>
            <Row>
              <h2>Luxury Private Jet Charters</h2>
              
            </Row>
            <Row>
            <p>Experience the epitome of luxury and convenience with our private jet charters. We offer unparalleled comfort, personalized service, and seamless travel experiences, allowing you to indulge in the exclusivity of private air travel while reaching your destination in style and sophistication.</p>
            </Row>
            <Row>
              <h2>Elite VIP Protection Services.</h2>
              
            </Row>
            <Row>
            <p>Our elite VIP protection services provide the utmost security and peace of mind. With highly trained professionals and advanced security measures, we ensure the safety and privacy of our esteemed clients, allowing them to navigate the world with confidence and serenity.</p>
            </Row>
            <Row>
              <h2>Unparalleled Airport Assistance</h2>
              
            </Row>
            <Row>
            <p>Enjoy unmatched airport assistance with our attentive team, providing seamless support from arrival to departure, making your travel experience hassle-free and smooth.</p>
            </Row>
          </Col>
        </Row>
        
        </Container>
        <Container>
      <Row>
          <h1>Excellence in Hospitality!!!</h1>
        </Row>
        <Row>
          <Col md={6}>
            
          </Col>
          <Col md={6}>
            <Row>
              <h2>Efficient Hotel Booking Solutions</h2>
              
            </Row>
            <Row>
            <p> Book hotels effortlessly with our efficient solutions, making travel planning seamless and stress-free.</p>
            </Row>
            <Row>
              <h2>State-of-the-Art Conference Facilities</h2>
              
            </Row>
            <Row>
            <p> Elevate your business events with our state-of-the-art conference facilities, designed to inspire and enhance productivity for successful meetings and gatherings.</p>
            </Row>
            <Row>
              <h2>Convenient Shuttle Service</h2>
              
            </Row>
            <Row>
            <p>Enjoy convenient shuttle service for seamless transportation, providing a hassle-free and reliable travel experience.</p>
            </Row>
          </Col>
        </Row>
        
        </Container>
      </Container>
      <Container fluid className='body py-3'>
        <Container className='text-center'>
          <Row><h3>Why Choose Us?</h3></Row>
        </Container>
      </Container>
    </div>
  )
}

export default Home