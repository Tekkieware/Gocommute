import React from 'react'
import HeroCard from '../components/HeroCard'
import {Container, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'

function Home() {
  return (
    <div>
      <HeroCard/>
      <Container fluid className='body pb-5'>
        <Container>
          <div className='hero-tab'>
      <Tabs
      defaultActiveKey="flight"
      id="uncontrolled-tab-example"
      fill
    >
      <Tab eventKey="flight" title="Flight" id='start-tab' className='text-center py-3'>
      <Container>
        <Row>
          <Col className='auto'>
          <i class="fa-solid fa-globe"></i> Visa Processing
          </Col>
          <Col className='auto'>
          <i class="fa-solid fa-passport"></i> Passport Processing
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-certificate"></i>NDLEA Clearance Certificate
          </Col>
          <Col className='d-none d-md-block'>
          <i class="fa-solid fa-registered"></i> E-mmigrant Registration
          </Col>
        </Row>
        <Row>
          <Col>
          <Button>Contact Us</Button>
          </Col>
        </Row>
      </Container>
      </Tab>
      <Tab eventKey="hotel" title="Hotel">
        Tab content for Profile
      </Tab>
      <Tab eventKey="tour" title="Tour">
        Tab content for Profile
      </Tab>
      <Tab eventKey="concierge" title="Vip Concierge Service">
        Tab content for Profile
      </Tab>
    </Tabs>
    </div>
    </Container>
      </Container>
    </div>
  )
}

export default Home