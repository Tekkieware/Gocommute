import React, {useEffect} from 'react'
import {Card, Row, Container, CardGroup, Col} from 'react-bootstrap'
import Rating from "./components/Rating";
import {Helmet} from 'react-helmet'

function PassengerSupport() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
       <Helmet>
        <title>Passenger Support Services by Gocommute - Your Journey, Our Priority</title>
        <meta name="description" content="Gocommute's passenger support services go beyond expectations to ensure a stress-free travel experience. From airport assistance and luggage handling to personalized itineraries and round-the-clock customer support, our dedicated team is here to make your journey seamless and memorable. Discover the unparalleled level of care and assistance with Gocommute's passenger support services." />
    </Helmet>
    <Card className="bg-dark text-white text-center support-card">
      <Card.ImgOverlay className="about-card-overlay">
        <Card.Title className="hero-title"><b className='hero-title d-none d-sm-inline'>Airport</b> Passenger Support. </Card.Title>
        <Card.Text>Enjoy seamless travel with our passenger support services. From check-in to boarding, we're here to ensure your journey is comfortable and stress-free. Trust us to take care of every detail. </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Container fluid className="body py-2 py-sm-4">
      <Container>
        <Row>
        <CardGroup>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title '><i class="fas fa-plane-circle-check fa-fas fa-service fa-solid"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Airport Protocol</b></h5>
                  <Card.Text>
                  Elevate your airport experience with our Airport Protocol Service. Our knowledgeable staff provides personalized assistance for seamless navigation. From priority check-in to expedited security clearance, enjoy a smooth journey. Relax at exclusive lounges and let us handle the protocols while you focus on enjoying your trip.
                 </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-business-time fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Immigration Fast-Track</b></h5>
                  <Card.Text>
                  Our expert team ensures a seamless Fast-track through Nigeria Immigration procedures. Enjoy expedited clearance, personalized assistance, and VIP treatment. Let us handle the formalities while you breeze through the airport, saving you time and enhancing your travel experience.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
            <CardGroup>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-children fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Unaccompanied Minor</b></h5>
                  <Card.Text>
                  We prioritize the safety and comfort of young travelers. Our dedicated staff provides personalized assistance, ensuring a smooth and worry-free journey. From check-in to arrival, trust us to handle all aspects while keeping parents and guardians informed. Peace of mind for everyone involved.
                 </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-person-walking-luggage fa-service"></i></b></h5>
               <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Baggage Retrieval</b></h5>
                  <Card.Text>
                  Say goodbye to the hassle of baggage retrieval with our efficient service. Our team takes care of every detail, ensuring your luggage is promptly delivered to you. Enjoy a stress-free travel experience knowing that we've got your bags covered. Focus on your journey while we handle the rest.
                 </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
        </Row>
        
      </Container>
      </Container>
      <div className='body pb-5'>
      <Container fluid className="catch py-3" id="feedback">
      <Container>
            <Row className='text-center'>
              <h3>What Our Happy Customers Are Saying</h3>
              <p>Don't take our word for it, here is what our customers have said about our service:</p>
            </Row>
            <Row>
              <CardGroup>
              <Card className="rating-card">
            <Card.Body>
              <Row>
                <Col>
              <Card.Title><h5 className="client-name">Kevwe Akpokiniovo</h5><span className="designation">CEO, Pallet deCore Ltd</span></Card.Title>
              </Col>
              <Col className="text-end">
              <Rating value={4.5} color={'#FFE234'} />
              </Col>
              </Row>
              <Card.Text>
              Gocommute Travels has been a very reliable company since I started using their services.
              Over the past 2 years, I have booked their services for professional and personal purposes, including for family members and I have not have any reason to worry or regret contracting them. 
              I would recommend them happily.
              </Card.Text>
            </Card.Body>
          </Card>
              <Card className="rating-card">
            <Card.Body>
            <Row>
              <Col>
              <Card.Title><h5>Dr Tunde Ajayi</h5></Card.Title>
              </Col>
              <Col className="text-end">
              <Rating value={5} color={'#FFE234'} />
              </Col>
            </Row>
              <Card.Text>
              I booked a VIP Concierge and Airport Protocol service with Gocommute and they were awesome. They handled our entire trip from flight to Airport Protocol service. 
              It was nice to pass that responsibility to an organization as competent and timely as Gocommute. They were also very responsive the entire time to handle questions and deal with travel logistics. 
              Highly recommend!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="rating-card">
            <Card.Body>
            <Row>
                <Col>
              <Card.Title><h5 className="client-name">Comfort Edward</h5><span className="designation">CEO, C4unique ushers and events</span></Card.Title>
              </Col>
              <Col className="text-end">
              <Rating value={4.5} color={'#FFE234'} />
              </Col>
              </Row>
              <Card.Text>
              Affordable and excellent service and your  help at the Airport made my journey stress free.
              I will recommend you to my family and friends both home and away.


              </Card.Text>
            </Card.Body>
          </Card>
              </CardGroup>
            </Row>
      </Container>
    </Container>
    </div>
  </div>
  )
}

export default PassengerSupport