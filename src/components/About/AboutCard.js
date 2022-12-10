import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Sakkar Chowdhury </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />I am a Software Engineer at{' '}
            <span className="purple">Intellier Limited</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Classical Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Sakkar Chowdhury</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
