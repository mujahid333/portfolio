import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tailer from "../../Assets/Projects/tailer.jpeg";
import stemeye from "../../Assets/Projects/stemeye.png";
import ssebowa from "../../Assets/Projects/ssebowa.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import floEats from "../../Assets/Projects/floeats.png";
import linkgraph from "../../Assets/Projects/linkgraph.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tailer}
              isBlog={false}
              title="Tailer App"
              description="Tailer app that is used to store and maintain the record of whole work. App front-end is developed in AngularJs and backend in Java "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={floEats}
              isBlog={false}
              title="Floeats"
              description="A website that is used for the online dilevery of the food. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           imgPath={ssebowa}
              isBlog={false}
              title="ssebowa.io"
              description=" Ssebowa.io which supports html, css, and js code with instant view of website."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio"
              description="Personal-portfolio website. This website is supports JavaScript and ReactJs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stemeye}
              isBlog={false}
              title="StemEye"
              description="A Software company Website. That is supports JS and HTML and BootStrap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkgraph}
              isBlog={false}
              title="Linkgraph"
              description="A worldwide product for SEO. linkgraph.io which supports JavaScript, AntD, and ReactJs code with instant view of website."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
