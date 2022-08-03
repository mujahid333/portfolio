import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mujahid Malik </span>
            from <span className="purple"> Bahawalpur, Pakistan.</span>
            <br />My Recently  Degree  Bachelor in Science in Computer Science(BSCS)  is in under progress ( 7th semester).
            <br />
            <br />
            Apart from coding,and study some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mujahid Malik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
