import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Full Stack Web Developer (MERN) and Mobile Application
              Developer (React-Native) 🤷‍♂️
              <br />
              <br />I love to
              <i>
                <b className="purple">
                  Sing, Code, Read Books and Explore new places{' '}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web & Mobile Technologies and Products{' '}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing Apps
              with <b className="purple">React Native/ Flutter</b> and
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SkrChowdhury"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/sakkhor.chowdhury/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/skrchowdhury/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/SkrChowdhury"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
