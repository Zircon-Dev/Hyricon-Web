import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">We Are?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-nodejs-plain colored" />
          <Techstack iconName="devicon-javascript-plain colored" />
          <Techstack iconName="devicon-html5-plain colored" />
          <Techstack iconName="devicon-nextjs-original-wordmark colored" />
          <Techstack iconName="devicon-bash-plain colored" />
          <Techstack iconName="devicon-php-plain colored" />
          <Techstack iconName="devicon-kotlin-plain-wordmark colored" />
          <Techstack iconName="devicon-discordjs-plain colored" />
          <Techstack iconName="devicon-kotlin-plain-wordmark colored" />
          
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Data Base</strong> We Use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Techstack iconName="devicon-mysql-plain colored" />
        <Techstack iconName="devicon-mongodb-plain colored" />
        <Techstack iconName="devicon-postgresql-plain colored" />
        </Row>   
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> We Use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code colored" />
          <Techstack iconName="devicon-git-plain-wordmark colored" />
          <Techstack iconName="devicon-github-original colored" />
          <Techstack iconName="devicon-nginx-original colored" />
          <Techstack iconName="devicon-linux-plain colored" />

        </Row>
      </Container>
    </Container>
  );
}

export default About;
