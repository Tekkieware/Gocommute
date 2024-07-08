import React, {useEffect} from 'react'
import {Card, Container, Col, Row, CardGroup} from 'react-bootstrap'
import Rating from "./components/Rating";
import {Helmet} from 'react-helmet'

function Concierge() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
      <Helmet>
        <title>Gocommute - VIP Concierge Services</title>
        <meta name="description" content="Experience the epitome of luxury and convenience with Gocommute's VIP concierge services. From exclusive transportation arrangements to personalized reservations and beyond, our dedicated team is here to curate a seamless journey tailored to your every need. Discover the pinnacle of travel excellence with Gocommute's renowned concierge services." />
        <meta property="og:title" content="Gocommute - VIP Concierge Service" />
        <meta property="og:url" content="https://gocommute.com.ng/services/concierge" />
        <meta property="og:description" content="Gocommute's VIP concierge services" />
        <meta property="og:image" content="https://gocommute.com.ng/static/media/gocommute.jpeg" />
    </Helmet>
      <Card className="bg-dark text-white text-center concierge-card">
        <Card.ImgOverlay className="about-card-overlay">
          <Card.Title className="hero-title">VIP Concierge. </Card.Title>
          <Card.Text>Experience luxury unleashed with our VIP Concierge Service! From red carpet events to bespoke travel, indulge in a world of opulence. Let us handle the details while you savor the extraordinary. Elevate your lifestyle now!. </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container fluid className="body py-2 py-sm-4">
        <Container>
          <Row>
          <CardGroup>
                <Card className="service-card text-center text-md-start my-5 m-sm-3">
                  <h5 className='text-center service-header'><b className='service-card-title '><i class="fa-solid fa-plane fa-service"></i></b></h5>
                  <Card.Body className='py-0'>
                  <h5><b className='service-card-title'>Private Jets</b></h5>
                    <Card.Text>
                    Unmatched Luxury: Elevate Your Journey with Our Private Jets Service! Indulge in opulence as you soar above. From seamless check-in to personalized attention, our curated fleet offers comfort and style. Any destination, any occasion. Experience true extravagance. Contact us now and let your dreams take flight.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="service-card text-center text-md-start my-5 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-sharp fa-solid fa-wine-glass fa-service"></i></b></h5>
                  <Card.Body className='py-0'>
                  <h5><b className='service-card-title'>Lounge</b></h5>
                    <Card.Text>
                    Unparalleled Comfort: Enter a World of Opulence with Our Lounge Service! Savor exquisite amenities and personalized attention. From exclusive access to tailored experiences, our Lounge Service is the epitome of indulgence. Join us and immerse yourself in an oasis of sophistication, where VIP treatment knows no bounds.
                    </Card.Text>
                  </Card.Body>
                </Card>
                
              </CardGroup>
              <CardGroup>
                <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-car fa-service"></i></b></h5>
                  <Card.Body className='py-0'>
                  <h5><b className='service-card-title'>Execurtive Car Hire</b></h5>
                    <Card.Text>
                    Arrive in Style: Experience the Epitome of Luxury with Our Executive Car Hire Service. Impeccably maintained vehicles, professional chauffeurs, and personalized attention ensure a seamless journey. Whether for business or leisure, let us transport you in elegance, making every moment truly extraordinary.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-car fa-service"></i></b></h5>
                 <Card.Body className='py-0'>
                  <h5><b className='service-card-title'>Shuttle</b></h5>
                    <Card.Text>
                    Elevate Your Transfers: Say goodbye to ordinary transportation and embrace the extraordinary. Our meticulously maintained fleet and professional drivers ensure a comfortable and efficient journey. From airports to city tours, enjoy a tailored VIP experience. Let us handle the logistics while you relax and enjoy the ride. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                
              </CardGroup>
              <CardGroup>
                <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-user-secret fa-service"></i></b></h5>
                    <Card.Body  className='py-0'>
                    <h5><b className='service-card-title'>Escort Service</b></h5>
                    <Card.Text>
                    Unmatched Support: Experience VIP Escort Service. Trust our professionals to accompany and guide you throughout your journey. Safety, privacy, and personalized care are our top priorities. From airports to events, indulge in seamless navigation and exclusive privileges. Elevate your experience with our VIP Concierge.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-handshake fa-service"></i></b></h5>
                    <Card.Body  className='py-0'>
                    <h5><b className='service-card-title'>Meet And Greet</b></h5>
                    <Card.Text>
                    Experience luxury and personalization with our Meet and Greet services. Whether it's at the airport or for special events, our dedicated team ensures a smooth and VIP experience just for you. Let us handle the details and warmly welcome you, making your journey truly exceptional.
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

export default Concierge