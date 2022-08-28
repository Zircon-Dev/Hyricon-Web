import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Faliactyl from "../../Assets/Projects/progress.jpg";
import expressit from "../../Assets/Projects/ExpressIT.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Coding <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here Are The Few Porjects Which Hyricon Have Worked!!!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://cdn.discordapp.com/attachments/880685755914154044/995003524700196944/unknown.png'}
              isBlog={false}
              isDOCS={false}
              title="Catactyl"
              description="A Powerfull Multi-Egg For Pterodactyl. Which Have Many Options Like Minecraft, Discord Bots, Database, And Many Many More..."
              link="https://catactyl.xyz"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://cdn.discordapp.com/attachments/941008378799489044/1010541956415377408/1.png'}
              isBlog={false}
              isDOCS={true}
              title="Faliactyl"
              description="A Powerfull Client Panel For Pterodactyl. Mostly Used In Free Host, But Can Be Used In Paid Host Also... It Have Lots Of Features Which Other Client Panel Dont Have Mostly Check Out Faliactyl Once's"
              link="https://github.com/Hyricon-Development/Faliactyl"
              docs="https://docs.hyricon.dev"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
