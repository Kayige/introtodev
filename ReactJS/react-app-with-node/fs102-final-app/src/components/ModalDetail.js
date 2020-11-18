import React, { useState } from "react";
import { Image, Modal, Button, Col } from "react-bootstrap";
import CoinDetailPage from "./CoinDetailPage";

export const ModalDetail = ({ coin }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <br />
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
    </>
  );
};
export default ModalDetail;
