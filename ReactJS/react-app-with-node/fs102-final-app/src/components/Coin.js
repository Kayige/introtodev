// import React from "react";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Image, Row, Col, Container, Modal, Button } from "react-bootstrap";
import CoinDetailPage from "./CoinDetailPage";
const Coin = ({ coin, deleteCoin }) => {
  const padding = { padding: "35px" };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        <Col sm onClick={handleShow}>
          <Image src={coin.image} alt={coin.name} height="100px" width="auto" />
        </Col>

        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          backdrop="static"
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {coin.id}{" "}
              <Image
                src={coin.image}
                alt={coin.name}
                height="50px"
                width="auto"
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CoinDetailPage coin={coin} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <Link to={`/coins/${coin.id}`}>
          <Col sm>
            <Image
              src={coin.image}
              alt={coin.name}
              height="100px"
              width="auto"
            />
          </Col>
        </Link> */}
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
