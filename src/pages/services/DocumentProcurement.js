import React, {useEffect} from 'react'
import {Card, Row, Container, CardGroup, Col} from 'react-bootstrap'
import Rating from "./components/Rating";

function DocumentProcurement() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
    <Card className="bg-dark text-white text-center document-card">
      <Card.ImgOverlay className="about-card-overlay">
        <Card.Title className="hero-title">Document Procurement. </Card.Title>
        <Card.Text>Navigate the complexities of migration with ease. Our expert consultancy services and streamlined document procurement ensure a seamless process. Let us guide you towards a smooth transition to your new destination. </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Container fluid className="body py-2 py-sm-4">
      <Container>
        <Row>
        <CardGroup>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
                <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-id-card fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Outbound Visa Processing</b></h5>
                  <Card.Text>
                  Embark on your international journey effortlessly with our outbound visa processing services. Our dedicated team navigates the complex visa requirements, streamlining the process for you. Trust us to handle the paperwork while you focus on planning your adventure. Your visa success is our priority.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start my-5 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-id-card fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Nigeria Visa On Arrival</b></h5>
                  <Card.Text>
                  Experience the convenience of Nigeria Visa On Arrival with our expert support. We handle the intricate process, ensuring a seamless application and approval. Say goodbye to embassy visits and paperwork hassles. Let us expedite your entry into Nigeria, making your travel experience hassle-free and efficient.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
            <CardGroup>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-id-card-clip fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>STR Visa</b></h5>
                  <Card.Text>
                  Our dedicated team assists you in obtaining the Short-Term Residence Visa, navigating the intricate requirements. Experience a streamlined process, ensuring a smooth transition to your chosen destination. Trust us to handle your visa needs with expertise.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-regular fa-id-card fa-service"></i></b></h5>
               <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Cerpac Card Processing/Renewal</b></h5>
                  <Card.Text>
                  Simplify your CERPAC card processing and renewal. Our dedicated team ensures a smooth experience, guiding you through the intricacies of the process. From application to renewal, we handle all the necessary steps, saving you time and ensuring compliance. Trust us for smooth CERPAC processing and renewal.
                 </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
            <CardGroup>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-book fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Quota Position Processing/Renewal</b></h5>
                  <Card.Text>
                  Unlock opportunities for Expatriate workers with our efficient Quota Position processing. Our experienced team handles the intricacies of the process, ensuring a seamless experience. From application to approval, we navigate the requirements, saving you time and streamlining the process. Trust us for Quota Position processing for your Expatriate workers
                 </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-globe fa-service"></i></b></h5>
               <Card.Body className='py-0'>
                <h5><b className='service-card-title'>E-migration Processing</b></h5>
                  <Card.Text>
                  Simplify E-migration processing with our professional support. Our dedicated team streamlines every step, ensuring a seamless experience from application to document procurement. Trust us to navigate the complexities, saving you time and ensuring a successful E-migration journey."
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
            <CardGroup>
              <Card className="service-card text-center text-md-start mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-book fa-service"></i></b></h5>
                <Card.Body className='py-0'>
                <h5><b className='service-card-title'>Passport Processing</b></h5>
                  <Card.Text>
                  Experience a simplified passport processing journey with our professional support. Our dedicated team assists you at every stage, ensuring a seamless experience from application to collection. Trust us to handle the necessary steps, saving you time and effort while ensuring a smooth and efficient passport processing experience.
                 </Card.Text>
                </Card.Body>
              </Card>
              <Card className="service-card text-center text-md-start mt-5 mt-sm-4 m-sm-3">
              <h5 className='text-center service-header'><b className='service-card-title'><i class="fa-solid fa-certificate fa-service"></i></b></h5>
               <Card.Body className='py-0'>
                <h5><b className='service-card-title'>ECOWAS Certificate, Yellow Card, NDLEA Clearance Certificate Processing </b></h5>
                  <Card.Text>
                  Easily get your travel requirements with our comprehensive services. From ECOWAS Certificate to Yellow Card and NDLEA Clearance Certificate processing, we handle it all. Trust us to navigate the paperwork and procure the necessary documents for a seamless travel experience. Your journey starts with us.
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

export default DocumentProcurement