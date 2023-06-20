import React, {useEffect} from "react";
import HeroCard from "../components/HeroCard";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Button,
  Card,
  Image,
  CardGroup,
} from "react-bootstrap";
import globe from "../images/globe.png";
import flight from '../images/flight.gif'
import jet from '../images/jet.jpg'
import hotel from '../images/hotel2.jpg'
import assist from '../images/assist.jpg'
import conference from '../images/conference2.jpg'
import security from '../images/security.jpg'
import CountUp from 'react-countup';
import {useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import ceo from '../images/ceo.jpg'
import Rating from "../components/Rating";
import {LinkContainer} from 'react-router-bootstrap'
import {Helmet} from 'react-helmet'

function Home() {
  const [metricsVisible, setMetricVisible] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
      <Helmet>
        <title>Gocommute - Your Exclusive Gateway to flawless Journeys </title>
        <meta name="description" content="Your trusted destination for VIP concierge services, migration consultancy, document procurement, and unparalleled passenger support" />
    </Helmet>
      <HeroCard />
      <Container fluid className="body pb-4">
        <Container>
          <div className="hero-tab">
            <Tabs defaultActiveKey="flight" id="uncontrolled-tab-example" fill>
              <Tab eventKey="flight" title="Flight" className="py-3">
                <Container>
                  <Row>
                    <Col>
                      <i class="fa-solid fa-globe"></i> Passport Processing
                    </Col>
                    <Col>
                      <i class="fa-solid fa-passport"></i> Ticket Booking
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-certificate"></i> NDLEA Clearance
                      Certificate
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-registered"></i> E-mmigrant
                      Registration
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center pt-2">
                      <LinkContainer to="services/document-procurement">
                      
                      <Button className="more-button">more</Button>
                      </LinkContainer>
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="hotel" title="Hotel" className="py-3">
                <Container>
                  <Row>
                    <Col>
                      <i class="fa-solid fa-hotel"></i> Reservations
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-utensils"></i> Dining Facilities
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-handshake"></i> Business Conference
                      Facilities
                    </Col>
                    <Col>
                      <i class="fa-solid fa-car"></i> Shuttle Service
                    </Col>
                  </Row>
                  <Row className="text-center pt-2">
                    <Col>
                    <LinkContainer to="services/hotel">
                      <Button className="more-button">more</Button>
                      </LinkContainer>
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="tour" title="Tour" className="py-3">
                <Container>
                  <Row>
                    <Col>
                      <i class="fa-solid fa-eye"></i> Sightseeing
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-person-biking"></i> Adventure
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-person-hiking"></i> Day Trips
                    </Col>
                    <Col>
                      <i class="fa-solid fa-building-columns"></i> Cultural
                      Tours
                    </Col>
                  </Row>
                  <Row className="text-center pt-2">
                    <Col>
                    <LinkContainer to="services/tour">
                      <Button className="more-button">more</Button>
                      </LinkContainer>
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="concierge" title="Concierge" className="py-3">
                <Container>
                  <Row>
                    <Col>
                      <i class="fa-solid fa-plane"></i> Private Jets
                    </Col>
                    <Col>
                      <i class="fa-solid fa-user-secret"></i> Security Service
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-person-walking-luggage"></i> Airport
                      Assistance
                    </Col>
                    <Col className="d-none d-md-block">
                      <i class="fa-solid fa-cart-shopping"></i> Shopping Service
                    </Col>
                  </Row>
                  <Row className="text-center pt-2">
                    <Col>
                    <LinkContainer to="services/concierge">
                      <Button className="more-button">more</Button>
                      </LinkContainer>
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </Container>
      <Container fluid className="white-section py-3">
        <Container>
          <Row>
            <h1>Stress-Free Travel!</h1>
          </Row>
          <Row>
            <Col md={6}>
              <Image src={flight} alt="Passport and Visa processing" fluid/>
            </Col>
            <Col md={6} className="pt-3">
              <Row>
                <h2>Expertly Managed Flight Reservations</h2>
              </Row>
              <Row>
                <p>
                  Our expert team takes care of every detail, ensuring
                  flawlessly managed flight reservations for your ultimate
                  travel convenience and peace of mind.
                </p>
              </Row>
              <Row>
                <h2>Hassle-Free Visa and Passport Assistance</h2>
              </Row>
              <Row>
                <p>
                Our visa and passport assistance service ensures effortless and efficient acquisition of your travel documents, eliminating application process stress.</p>
              </Row>
              <Row className="d-block d-md-none">
              <Image src={assist} alt="Reliable Guidance from Departure to Arrival" fluid/>
              </Row>
              <Row className="pt-3 pt-md-0">
                <h2>Reliable Guidance from Departure to Arrival</h2>
              </Row>
              <Row>
                <p>
                Trust us as your reliable travel companion, providing support, expertise, and assistance for a smooth, enjoyable, and worry-free journey.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="body py-3">
        <Container>
          <Row>
            <h1>Exclusivity Redefined!</h1>
          </Row>
          <Row>
            <Col md={6}>
            <Image src={jet} alt="VIP Concierge Services" fluid/>
            </Col>
            <Col md={6} className="pt-3 pt-md-0">
              <Row>
                <h2>Luxury Private Jet Charters</h2>
              </Row>
              <Row>
                <p>
                  The Epitome of luxury and convenience await with our private jet charters. Enjoy comfort, personalized service, and seamless travel in style and sophistication.</p>
              </Row>
              <Row>
                <h2>Elite VIP Protection Services.</h2>
              </Row>
              <Row>
                <p>
                Luxury Enjoy elite VIP protection services for maximum security and peace of mind. Our professionals and advanced measures ensure safety, privacy, and confident navigation.
                </p>
              </Row>
              <Row className="d-block d-md-none">
              <Image src={security} alt="Elite VIP Protection Services." fluid/>
              </Row>
              <Row className="pt-3 pt-md-0">
                <h2>Unparalleled Airport Assistance</h2>
              </Row>
              <Row>
                <p>
                  Enjoy unmatched airport assistance with our attentive team, ensuring a hassle-free and smooth travel experience from arrival to departure.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="white-section py-3">
        <Container>
          <Row>
            <h1>Excellence in Hospitality!</h1>
          </Row>
          <Row>
            <Col md={6}>
            <Image src={hotel} alt="Hotel Reservations" fluid/>
            </Col>
            <Col md={6} className="pt-3"> 
              <Row>
                <h2>Efficient Hotel Booking Solutions</h2>
              </Row>
              <Row>
                <p>
                  {" "}
                  Book hotels effortlessly with our efficient solutions, making
                  travel planning seamless and stress-free.
                </p>
              </Row>
              <Row>
                <h2>State-of-the-Art Conference Facilities</h2>
              </Row>
              <Row>
                <p>
                  {" "}
                  Elevate your business events with our state-of-the-art
                  conference facilities, designed to inspire and enhance
                  productivity for successful meetings and gatherings.
                </p>
              </Row>
              <Row className="d-block d-md-none">
              <Image src={conference} alt="State-of-the-Art Conference Facilities" fluid/>
              </Row>
              <Row className="pt-3 pt-md-0">
                <h2>Convenient Shuttle Service</h2>
              </Row>
              <Row>
                <p>
                  Enjoy convenient shuttle service for seamless transportation,
                  providing a hassle-free and reliable travel experience.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="catch py-3" id="whyus">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start">
              <Container fluid>
                <Row>
                  <h3>Why Choose Us?</h3>
                  <p>
                    With our unwavering commitment to excellence, we cater to all your travel needs, guaranteeing utmost satisfaction throughout every aspect of your journey. Operating at Murtala Muhammed Airport Lagos, Nnamdi Azikiwe International Airport Abuja, and other airports all over Nigeria, we deliver unparalleled service.
                  </p>
                </Row>
                <Row>
                  <Col md={8}>
                    <Image
                      src={globe}
                      fluid
                      alt="Travel around the globe comfortably"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={6}>
              <Container>
                <Row>
                  <Card className="why-card py-3 py-md-3 p-md-5">
                    <ul className="step-list">
                      <h4 className="text-center">Bespoke Service</h4>
                      <hr />
                      <p>
                        Indulge in the epitome of luxury and personalized
                        service with our bespoke solutions. From handcrafted
                        itineraries to exclusive access, Our team ensures that:
                      </p>
                      <li>
                        You Get Unparalleled Luxury and Personalized Service
                      </li>
                      <li>
                        It's Your Journey, Your Way and it's Exquisitely Crafted
                      </li>
                      <li>
                        You'll Unlock Unforgettable Adventures, Curated Just for
                        You
                      </li>
                    </ul>
                    <ul className="step-list">
                      <hr />
                      <h4 className="text-center">Affordable Luxury</h4>
                      <hr />
                      <p>
                        Experience affordable luxury like never before. Our
                        impeccable service, elegant accommodations guarantees
                        that:
                      </p>
                      <li>
                        You get VIP treatment with Value, Indulgence, and
                        Price-Perfection
                      </li>
                      <li>
                        You Indulge in Luxury Without Breaking the Bank or
                        Compromising The Quality Of You Experience
                      </li>
                      <li>
                        You'll Get Affordable Elegance, Unforgettable Experiences
                      </li>
                    </ul>
                  </Card>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="white-section py-5">
        <Container>
          <Row>
          <Col md={6}>
            <Card className="ceo-card text-center">
            <Card.Img src={ceo} />
              <Card.Body>
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
                <span className="metric">{metricsVisible &&<CountUp className="metric" start={0} duration={2} end={95} />}%</span>
                  <p className="metric-sub">Cutomer Satisfaction</p>
                </Col>
              </Row>
              </ScrollTrigger>
            
          </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="body py-3" id="feedback">
        <Container>
              <Row row className="text-center">
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
      <Container fluid className="white-section py-5 text-center text-md-start">
        <Container>
        <Row>
          <Col md={6}>
            <h3>Become One Of Our Happy Clients Now!!!!</h3>
          </Col>
          <Col md={6} className="text-center py-3 py-md-0">
          <LinkContainer to='/contact'>
            <Button variant="primary" className="send">SEND A MESSAGE</Button>
          </LinkContainer>
            </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
