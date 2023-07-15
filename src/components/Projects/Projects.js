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
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={sellphone}
              isBlog={false}
              title="SellPhone"
              description="SellPhone is a phone Resale Website. Users can book/buy a phone. Sellers can add a phone and advertise it. Admin can see all sellers and buyers and delete them, verify them.
"
              ghLink="https://github.com/SkrChowdhury/reactjs-sellphone-resale-website-client-side"
              demoLink="https://reactjs-sellphone-resale.web.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Doctor's Portal"
              description="Doctors Portal is a Dental Care Appointment booking website where users can book appointments and admin can see all bookings and delete users and give users admin access.
"
              ghLink="https://github.com/SkrChowdhury/reactjs-doctors-portal-client-side"
              demoLink="https://doctors-portal-dental-care.netlify.app"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
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
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tech Quiz"
              description="A Tech Quiz Website using React,tailwind CSS where users can select a topic and attend in quiz test to verify his/her skills based on that topic. 
 "
              ghLink="https://github.com/SkrChowdhury/reactjs-tech-quiz-website"
              demoLink="https://tech-quiz-site.netlify.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Best 5 PSG Players"
              description="A Website to select best 5 players from PSG Foot Club."
              ghLink="https://github.com/SkrChowdhury/selecting-best-five-playes-javascript"
              demoLink="https://psg-best-five-players.netlify.app"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Speed Typer"
              description="A Speed Typer Testing Website. Users can ses total errors and histories of previous typing sessions.
 "
              ghLink=""
              demoLink="https://speed-typer-assignment.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
