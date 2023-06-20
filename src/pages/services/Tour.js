import React, {useEffect} from 'react'
import {Card, Row, Container, CardGroup, Col} from 'react-bootstrap'
import Rating from "./components/Rating";
import {Helmet} from 'react-helmet'

function Tour() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
      <Helmet>
        <title>Exceptional Tour Services by Gocommute - Discover Extraordinary Destinations</title>
        <meta name="description" content="Embark on unforgettable journeys with Gocommute's exceptional tour services. From curated itineraries to hidden gems and iconic landmarks, our knowledgeable guides ensure you experience the true essence of each destination. Discover the world's wonders with Gocommute's tour services and create lifelong memories during your travels." />
    </Helmet>
    <Card className="bg-dark text-white text-center tour-card">
      <Card.ImgOverlay className="about-card-overlay">
        <Card.Title className="hero-title">Tour.</Card.Title>
        <Card.Text>Embark on unforgettable adventures with our curated tours. Explore captivating destinations, immerse yourself in local culture, and create lifelong memories. Let us take you on a remarkable journey.</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Container fluid className="body py-2 py-sm-4">
      <Container>
        <Row>
        <CardGroup>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-eye fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Sightseeing</b></h5>
                  <Card.Text>
                  Uncover the beauty of iconic landmarks and hidden gems with our extraordinary sightseeing tours. Our expert guides provide insightful commentary as you explore breathtaking sights and immerse yourself in local culture. Experience the wonders of each destination with our unforgettable sightseeing experiences.
                 </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-sharp fa-solid fa-person-biking fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Adventures</b></h5>
                  <Card.Text>
                  Embrace thrilling adventures with our adrenaline-pumping experiences. From heart-pounding activities like hiking, rafting, and zip-lining to off-road explorations and wildlife encounters, we offer an array of thrilling adventures that cater to your adventurous spirit. Get ready to create lifelong memories and embark on the adventure of a lifetime.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
            <CardGroup>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-building-columns fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Cultural Tours</b></h5>
                  <Card.Text>
                  Immerse yourself in rich cultural heritage with our captivating cultural tours. Explore ancient ruins, visit historical landmarks, and engage with local traditions and customs. Our expert guides provide deep insights, allowing you to truly connect with the essence of each destination. Experience the magic of cultural discovery with us.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-person-hiking fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Day Trips</b></h5>
                  <Card.Text>
                  Embark on unforgettable day trips with our curated itineraries. From scenic escapes to cultural immersions, our expertly crafted day trips offer a perfect blend of exploration and relaxation. Discover hidden gems, indulge in local cuisine, and create cherished memories in a single day. Let us make your day trip extraordinary.
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

export default Tour