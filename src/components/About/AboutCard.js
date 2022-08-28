import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, We are <span className="purple">Hyricon Development </span>,
            Web & Backend Development{" "}

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Prajwal Lazy AF
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
