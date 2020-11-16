import React from "react";
import AddCoin from "./AddCoin";
import CoinList from "./CoinList";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";

const CoinSummaryPage = () => {
  const padding = { padding: "15px" };
  return (
    <>
      <Banner />
      <Container>
        <Row>
          <Col sm style={padding}>
            <AddCoin />
          </Col>
          <Col md style={padding}>
            <h1> Favourites </h1>
          </Col>
          <Col sm></Col>
        </Row>
        <Row>
          <Col>
            <CoinList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CoinSummaryPage;
