import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiReact } from "react-icons/di";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made With ❤️ By Prajwal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Hyricon</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Hyricon-Development"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.gg/k9n7BeMZdK"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://docs.hyricon.dev/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
