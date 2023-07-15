import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

import Home from '../Home/Home';
import Particle from '../Particle';
import { Player } from '@lottiefiles/react-lottie-player';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const handleEmail = () => {
    toast.success('Email Sent Successfully !!');
    navigate('/');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rq2dluf',
        'template_sjjc5lt',
        form.current,
        'vUcFKtXj5ChG4vnPn'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />

        <Container
          className=""
          style={{
            // justifyContent: 'center',
            // position: 'relative',
            width: '100%',
            // margin: 'auto',
            flexDirection: 'row',
            display: 'flex',
          }}
        >
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_ipd377dh.json"
            autoplay
            loop
            className="w-75 d-none d-lg-block"
          />
          <Form className="w-100 " ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white ">Your Name</Form.Label>
              <Form.Control
                name="user_name"
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Your Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
              />
            </Form.Group>
            <FloatingLabel label="Leave your message here">
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Leave your message here"
                style={{ height: '100px', marginBottom: 20 }}
              />
            </FloatingLabel>

            <Button
              onClick={handleEmail}
              variant="primary"
              type="submit"
              value="Send"
            >
              Send
            </Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
