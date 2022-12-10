import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.png';
import editor from '../../Assets/Projects/codeEditor.png';
import sellphone from '../../Assets/Projects/sellphone.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sellphone}
              isBlog={false}
              title="SellPhone"
              description="SellPhone is a phone Resale Website. Users can book/buy a phone. Sellers can add a phone and advertise it. Admin can see all sellers and buyers and delete them, verify them. Blog page has some relevant blog posts. Stripe payment gateway implemented.
"
              ghLink="https://github.com/SkrChowdhury/reactjs-sellphone-resale-website-client-side"
              demoLink="https://reactjs-sellphone-resale.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WarmUp"
              description="A Gym based Review Website. where Users can take a service and review the service. Users can see all reviews by other users. Admin can add a service and delete users or services.
 "
              ghLink="https://github.com/SkrChowdhury/reactjs-warmup-service-review-website-client-side"
              demoLink="https://reactjs-warmup-website.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
