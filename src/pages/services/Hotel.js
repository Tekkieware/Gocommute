import React, {useEffect} from 'react'
import {Card, Row, Container, CardGroup, Col} from 'react-bootstrap'
import Rating from "./components/Rating";
import {Helmet} from 'react-helmet'

function Hotel() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
       <Helmet>
        <title>Premier Hotel Services by Gocommute - Elevate Your Stay with Unmatched Excellence</title>
        <meta name="description" content="Experience luxury and comfort like never before with Gocommute's premier hotel services. From exclusive reservations at world-class hotels to personalized amenities and impeccable guest support, we ensure your stay is nothing short of extraordinary. Discover the epitome of hospitality with Gocommute's hotel services and create unforgettable memories during your travels." />
    </Helmet>
    <Card className="bg-dark text-white text-center hotel-card">
      <Card.ImgOverlay className="about-card-overlay">
        <Card.Title className="hero-title">Hotel.</Card.Title>
        <Card.Text>Discover comfort and hospitality at its finest with our exceptional hotel services. From luxurious accommodations to personalized experiences, we ensure a memorable stay that exceeds your expectations. Experience true hospitality with us.</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Container fluid className="body py-2 py-sm-4">
      <Container>
        <Row>
        <CardGroup>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-hotel fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Reservations</b></h5>
                  <Card.Text>
                  From budget-friendly to luxurious options, we cater to every traveler's needs. Our dedicated team ensures a hassle-free booking process, providing you with a comfortable and memorable stay at your desired destination. Book with us and make your travel dreams a reality.
                 </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-handshake fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Business Conference Facilities</b></h5>
                  <Card.Text>
                  From state-of-the-art technology to flexible meeting spaces, we provide the perfect setting for successful conferences and corporate gatherings. Our dedicated team ensures seamless planning and execution, leaving you free to focus on your business objectives. Experience excellence in every detail.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
            <CardGroup>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-utensils fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Dining Facilities</b></h5>
                  <Card.Text>
                  From elegant restaurants to cozy cafes, indulge in a variety of culinary delights that cater to every palate. Our experienced chefs create culinary masterpieces using the finest ingredients, ensuring a memorable dining experience. Enjoy exceptional flavors and impeccable service with us.
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

export default Hotel