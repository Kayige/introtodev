import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { Card, Image, Modal, Col, Button } from "react-bootstrap";
import { WatchListContext } from "./WatchList";
import CoinDetailPage from "./CoinDetailPage";

const TrendingCoin = ({ coin }) => {
  const { addCoin } = useContext(WatchListContext);
  const padding = { padding: "35px" };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Link to={`/coins/${coin.id}`}>
        <Card.Body>
          <Image src={coin.image} width={25} height={25} />
          {coin.name}
        </Card.Body>
      </Link> */}
      <Card.Body>
        <Col sm onClick={handleShow}>
          <Image src={coin.image} alt={coin.name} height={50} width={50} />
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
      </Card.Body>
      <Card.Footer>
        <a onClick={() => addCoin(coin.id)} href="#">
          <i className="add-icon fas fa-plus-circle text-success">&nbsp;Add</i>
        </a>
      </Card.Footer>
    </>
  );
};
export default TrendingCoin;
