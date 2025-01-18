import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; // Ensure Particle is correctly imported
import ftcImg from "../../Assets/Projects/FTC.png";
import quickTrackImg from "../../Assets/Projects/QuickTrack.png";
import bakerEaterImg from "../../Assets/Projects/Baker_Eater_logo.jpg";
import innovationLabImg from "../../Assets/Projects/innovationlab.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakerEaterImg}
              isBlog={false}
              title="BakerEater"
              description="A platform that gamifies customer engagement for local businesses. Led the beta launch and crafted strategies to help local businesses attract customers using innovative gamification approaches."
              demoLink="https://bakereater.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickTrackImg}
              isBlog={false}
              title="QuickTrack"
              description="Developed a delivery management system for restaurants and other industries. It optimizes logistics and enhances operational efficiency with real-time tracking."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftcImg}
              isBlog={false}
              title="Future Technology Club"
              description="Led the Innovation Committee, developing over 7 projects in 6 months and creating a sustainable framework to foster creativity and technological innovation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={innovationLabImg}
              isBlog={false}
              title="Innovation Lab Framework"
              description="Developed a sustainable innovation framework within the Future Technology Club, leading the creation of an Innovation Lab that fostered creativity and innovative thinking."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
