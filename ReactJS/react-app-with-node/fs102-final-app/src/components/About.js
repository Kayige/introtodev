import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Typical from "react-typical";
import me from "./images/me.png";

const About = () => {
  const alignstyle = { textAlign: "left" };

  return (
    <Container>
      <br />
      <Row>
        <h1>About Me</h1>
      </Row>
      <Row>
        <Col sm>
          <Image src={me} width="300px" height="auto" />
        </Col>
        <Col sm style={alignstyle}>
          <hr />
          <p>MAGES FS102 Final Project Assignment</p>
          <p>
            Build with <strong>ReactJS</strong>
          </p>
          <p>API used:</p>
          <ul>
            <li>
              <strong>coinGecko</strong>
            </li>
            <li>
              <strong>Crypto-News-API</strong>
            </li>
          </ul>
          <p>External Libraries used:</p>
          <ul>
            <li>
              <strong>axios</strong>
            </li>
            <li>
              <strong>react-bootstrap</strong>
            </li>
            <li>
              <strong>react-router-dom</strong>
            </li>
            <li>
              <strong>react-scroll-up</strong>
            </li>
            <li>
              <strong>react-typical</strong>
            </li>
          </ul>

          <Typical
            steps={["Built", 1000, "Built by Gabriel Lee", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};
export default About;
