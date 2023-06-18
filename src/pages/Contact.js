import React, {useState, useEffect, useRef} from 'react'
import {Card, Container, Col, Form, Row, Alert, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Loader from '../components/Loader';

function Contact() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
   const form = useRef();
   const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_binj3va', 'template_cp0gzjh', form.current, 'wkbG4ac-EXzIqHQa_')
      .then((result) => {
          setLoading(false)
          setSuccess(result.text)
      }, (error) => {
          setLoading(false)
          setError(error.text)
      });
  };
  return (
    <div>
      <Card className="bg-dark text-white text-center contact-new-card">
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.155912010785!2d3.325382839571322!3d6.57482672124157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91e751d71485%3A0xf222ed73a7d14f9a!2sMurtala%20Muhammed%20International%20Airport%20-%20Lagos!5e0!3m2!1sen!2sng!4v1687086601962!5m2!1sen!2sng" width="1600" style={{border: "none"}} height="400" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Card>
      <Container fluid className="catch pb-4">
        <Container>
          <div className="contact-card">
          <Row className='text-center'>
            {success && <Alert variant='success'>We recieved your message. We will reach out to you as soon as possible. You can click the chat button on the bottom right corner to instantly connect with a staff.</Alert>}  
            {error && <Alert variant='danger'>{error}&nbsp; We had an issue getting your message. Please can click the chat button on the bottom right corner to instantly connect with a staff.</Alert>}  
          </Row>
            {loading ? 
            <Row className='text-center'>
                <Loader />
              </Row>
              :
              <div>
                <Row className="mt-1">
            <Col>
              <h6>
                <b className='contact-message'>
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
          }
          

          
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Contact