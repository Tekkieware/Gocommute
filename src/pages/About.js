import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col, CardGroup, Image } from "react-bootstrap";
import gif from '../images/conceirge.gif';
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import ceo from '../images/ceo.jpg'
import {Helmet} from 'react-helmet'
function About() {
  const [metricsVisible, setMetricVisible] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);


  return (
    <div>
      <Helmet>
        <title>About Gocommute - Elevating Journeys with Unmatched Expertise</title>
        <meta name="description" content="Discover the essence of Gocommute, a leading provider of VIP concierge, migration consultancy, document procurement, and passenger support services. Learn about our commitment to exceptional service, our dedicated team of experts, and how we empower individuals and businesses to navigate seamless journeys and successful migrations. Explore our about page to uncover the Gocommute difference." />
        <meta property="og:title" content="About Gocommute" />
        <meta property="og:url" content="https://gocommute.com.ng/about" />
        <meta property="og:description" content="Discover the essence of Gocommute" />
        <meta property="og:image" content="https://gocommute.com.ng/static/media/gocommute.jpeg" />
    </Helmet>
      <Card className="bg-dark text-white text-center about-card">
        <Card.ImgOverlay className="about-card-overlay">
          <Card.Title className="hero-title">About Us. </Card.Title>
          <Card.Text> Introducing Gocommute, your ultimate travel assistance
                    solution. </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container fluid className="body pt-5">
        <Container>
          <div className="about-details">
            <Row>
              <Col md={6}>
                <Row>
                  <h4 className="text-center">Our Story</h4>
                </Row>
                <Row>
                  <p className="about-text">
                    We understand the challenges travelers face in
                    handling tasks like passport processing, ticket booking,
                    NDLEA clearance, e-migrant registration, and finding quality
                    hotel services. That's why we offer a range of services
                    including flight bookings, visa assistance, conference
                    facilities, hotel reservations, shuttle service, tours, meet
                    and greets, private jet charter, airport assistance, and
                    security services.
                  </p>
                </Row>
                <Row className="d-block d-md-none">
                <Image fluid src={gif} alt="Our story" />
                </Row>
                <Row>
                  <p className="about-text">
                    We take great pride in our commitment to customer
                    satisfaction and strive to exceed expectations at every
                    turn. With Gocommute, you can expect personalized attention,
                    meticulous planning, and unwavering support throughout your
                    travel journey.
                  </p>
                </Row>
                <Row>
                  <p className="about-text">
                    Contact Gocommute today, and let us transform the way you
                    travel. Your dream journey awaits!
                  </p>
                </Row>
              </Col>
              <Col md={6} className="d-none d-md-block">
                <Image fluid src={gif} alt="Our story" />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Container fluid className="customer">
        <Container>
          <div className="customers">
            <Row>
              <h4 className="text-center">Our Customers</h4>
            </Row>
            <Row>
              <p className="about-text">
                At Gocommute, we proudly serve a diverse range of customers,
                catering to the unique needs of various traveler profiles. Our
                clientele includes:
              </p>
            </Row>
            <Row>
              <ul className="about-list">
                <li>
                  Regular Travelers: Comprehensive travel assistance for
                  frequent travelers, ensuring a smooth journey.
                </li>
                <li>
                  Business Travelers: We specialize in streamlining travel for
                  professionals. From flight bookings to hotel arrangements and
                  conference facilities, we optimize your travel experience,
                  allowing you to focus on your business objectives.
                </li>
                <li>
                  VIPs: Personalized services for VIP clients, including
                  exclusive arrangements.
                </li>
                <li>
                  Meet and Greets: Specialized services to welcome guests,
                  ensuring a positive impression.
                </li>
              </ul>
            </Row>
          </div>
        </Container>
      </Container>
      <Container fluid className="body">
        <Container>
          <div className="core-value">
            <Row>
              <h4 className="text-center">Our Core Values</h4>
            </Row>
            <Row>
              <CardGroup>
                <Card className="value-card">
                  <Card.Body>
                    <Card.Title className="text-center">
                      <h5>Excellence</h5>
                    </Card.Title>
                    <Card.Text>
                      We are committed to delivering exceptional services,
                      ensuring quality and attention to detail in flight, hotel,
                      tour, and VIP concierge services.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="value-card">
                  <Card.Body>
                    <Card.Title className="text-center">
                      <h5>Reliability</h5>
                    </Card.Title>
                    <Card.Text>
                      Clients can rely on us for seamless travel arrangements,
                      including flight connections, preferred hotels, and
                      unforgettable tours. We are there for our clients every
                      step of the way.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="value-card">
                  <Card.Body>
                    <Card.Title className="text-center">
                      <h5>Integrity</h5>
                    </Card.Title>
                    <Card.Text>
                      We uphold the highest standards of integrity, honesty, and
                      confidentiality. Clients can trust us to handle their
                      travel arrangements ethically and transparently.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Row>
          </div>
        </Container>
      </Container>
      <Container fluid className="body py-5">
        <Container>
          <Row>
          <Col md={6}>
            <Card className="ceo-about-card text-center">
              
              <Card.Body>
                <Card.Img src={ceo} />
                <Card.Text>
                Hi , I am Onuche Moses Akoh, the Managing Director of Gocommute. With over two years of experience, We specialize in providing exceptional airport passenger support, migration consultancy, and VIP concierge services. Gocommute has a high customer retention and satisfaction rate, setting the industry standard for seamless travel experiences and personalized assistance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="text-center py-2 py-md-5 my-md-5">   
          <ScrollTrigger onEnter={() => setMetricVisible(true)} onExit={() => setMetricVisible(false)}> 
              <Row className="py-md-4 py-lg-5">
                <Col md={6} className="pt-4">
                  <span className="metric">{metricsVisible && <CountUp className="metric" start={0} duration={2} end={2} />}+</span>
                  <p className="metric-sub">years</p>
                </Col>
                <Col md={6} className="pt-4">
                <span className="metric">{metricsVisible &&<CountUp className="metric" start={0} duration={2} end={200} />}+</span>
                  <p className="metric-sub">clients</p>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="pt-4">
                <span className="metric">{metricsVisible &&<CountUp className="metric" start={0} duration={2} end={85} />}%</span>
                  <p className="metric-sub">Customer Retention</p>
                </Col>
                <Col md={6} className="pt-4">
                <span className="metric">{metricsVisible &&<CountUp className="metric" start={1} duration={2} end={95} />}%</span>
                  <p className="metric-sub">Cutomer Satisfaction</p>
                </Col>
              </Row>
              </ScrollTrigger>
            
          </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default About;
