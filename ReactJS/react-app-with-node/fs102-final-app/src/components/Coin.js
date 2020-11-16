import React from "react";
import { Link } from "react-router-dom";
import { Image, Row, Col, Container } from "react-bootstrap";

const Coin = ({ coin, deleteCoin }) => {
  const padding = { padding: "35px" };

  return (
    <Container>
      <Row>
        <Link to={`/coins/${coin.id}`}>
          <Col sm>
            <Image
              src={coin.image}
              alt={coin.name}
              height="100px"
              width="auto"
            />
          </Col>
        </Link>
        <Col md style={padding}>
          {coin.current_price}
        </Col>
        <Col
          md
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger"
              : "text-success"
          }
          style={padding}
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down"></i> // down
          ) : (
            <i className="fas fa-sort-up"></i> //up
          )}
          {coin.price_change_percentage_24h}
        </Col>
        <Col md style={padding}>
          <i
            onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);
            }}
            className="delete-icon far fa-times-circle text-danger"
          ></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Coin;
