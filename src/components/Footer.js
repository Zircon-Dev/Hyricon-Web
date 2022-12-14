import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Hyricon Development</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2022s</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/Hyricon-Development/" style={{ color: "white" }}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.gg/k9n7BeMZdK"
                style={{ color: "white" }}
              >
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://docs.hyricon.dev"
                style={{ color: "white" }}
              >
                <i className="fab fa-book"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
