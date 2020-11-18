import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { Back } from "./Back";
const CoinData = ({ data }) => {
  const alignStyle = { textAlign: "center", padding: "20px" };
  const renderData = () => {
    if (data) {
      return (
        <Container>
          <br />
          <Row>
            <Col>
              <Col>
                <p className="text-muted coin-data-category">Market Cap</p>
                <span>{data.market_cap}</span>
              </Col>
              <hr />
              <Col>
                <p className="text-muted coin-data-category">Total Supply</p>
                <span>{data.total_supply}</span>
              </Col>
            </Col>

            <Col>
              <Col>
                <p className="text-muted coin-data-category">Volume(24H)</p>
                <span>{data.total_volume}</span>
              </Col>
              <hr />
              <Col>
                <p className="text-muted">high 24h</p>
                <span>{data.high_24h}</span>
              </Col>
            </Col>

            <Col>
              <Col>
                <p className="text-muted">Circulating Supply</p>
                <span>{data.circulating_supply}</span>
              </Col>
              <hr />
              <Col>
                <p className="text-muted">low 24h</p>
                <span>{data.low_24h}</span>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col style={alignStyle}>{/* <Back /> */}</Col>
          </Row>
        </Container>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
