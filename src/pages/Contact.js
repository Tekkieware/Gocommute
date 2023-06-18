import React, {useState, useEffect, useRef} from 'react'
import {Card, Container, Col, Form, Row, Alert, Button } from 'react-bootstrap'

function Contact() {
  const [error, setError] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();
    /*

    emailjs.sendForm('service_r9mfqie', 'contact_form', form.current, 'wkbG4ac-EXzIqHQa_')
      .then((result) => {
          setEmailSent(true);
      }, (error) => {
          setError(error.text);
      });
      setEmailSent(true);
    */
  };
  return (
    <div>
      <Card className="bg-dark text-white text-center concierge-card">
        <Card.ImgOverlay className="about-card-overlay">
          <Card.Title className="hero-title">VIP Concierge. </Card.Title>
          <Card.Text>Experience luxury unleashed with our VIP Concierge Service! From red carpet events to bespoke travel, indulge in a world of opulence. Let us handle the details while you savor the extraordinary. Elevate your lifestyle now!. </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container fluid className="body pb-4">
        <Container>
          <div className="contact-card">
          <Row className="mt-1">
            <Col>
              <h6>
                <b>
                  Send a Message and We'll Get In Touch:
                </b>
              </h6>
            </Col>
          </Row>
        <Row>
        <Col>
          <Card className="contact-form">
            <Card.Body>
              <Form ref={form} onSubmit={sendEmail}>
                <Container>
                  <Row>
                  <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="FirstName"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          name="user_firstname"
                          required
                        />
                      </Form.Group>
                    </Col>                        
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="LastName"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          name="user_lastname"
                          required
                        />
                      </Form.Group>
                    </Col>                        
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="PhoneNumber"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter Phone Number"
                          name="user_phone_number"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="Email"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="user_email"
                          required
                        />
                        <Form.Text className='assurance'>
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="CompanyName"
                      >
                      
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Company Name"
                          name="user_company"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="CompanyAddress"
                      >
                       
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Company Address"
                          name="user_company_address"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group
                        className="mb-3"
                        controlId="Message"
                      >
        
                        <Form.Control
                          as="textarea" 
                          rows={5}
                          placeholder="Any other information you'd like to share?."
                          name="message"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className='text-center'>
                    <Col>
                  <input className='btn btn-primary' type="submit" value="Send Message" />
                  </Col>
                  </Row>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Contact