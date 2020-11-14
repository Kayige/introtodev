import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Typical from "react-typical";
import me from "./images/me.png";

const About = () => {
  const alignstyle = { textAlign: "left" };

  return (
    <Container style={alignstyle}>
      <br />
      <Row>
        <h1>About</h1>
      </Row>
      <Row>
        <Col>
          <hr />
          <p>MAGES FS102 Final Project Assignment</p>
          <p>
            Build with <strong>ReactJS</strong>
          </p>
          <p>External Libraries used:</p>
          <ul>
            <li>
              <strong>react-bootstrap</strong>
            </li>
            <li>
              <strong>react-router-dom</strong>
            </li>
            <li>
              <strong>react-typical</strong>
            </li>
            <li>
              <strong>axios</strong>
            </li>
          </ul>

          <Typical
            steps={["Built", 1000, "Built by Gabriel Lee", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </Col>
        <Col>
          <Image src={me} />
        </Col>
      </Row>
    </Container>
  );
};
export default About;
