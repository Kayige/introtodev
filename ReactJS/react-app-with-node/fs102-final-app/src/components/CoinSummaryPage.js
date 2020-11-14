import React from "react";
import AddCoin from "./AddCoin";
import CoinList from "./CoinList";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
const CoinSummaryPage = () => {
  const padding = { padding: "15px" };
  return (
    <Container>
      <Banner />
      <Row>
        <Col className="text-left" style={padding}>
          <AddCoin />
        </Col>
      </Row>
      <Row>
        <Col>
          <CoinList />
        </Col>
      </Row>
    </Container>
  );
};

export default CoinSummaryPage;
