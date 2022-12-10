import React from 'react';
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import Particle from '../Particle';

const Contact = () => {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            width: '60%',
            margin: 'auto',
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white ">Your Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <FloatingLabel label="Leave your message here">
              <Form.Control
                as="textarea"
                placeholder="Leave your message here"
                style={{ height: '100px', marginBottom: 20 }}
              />
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
