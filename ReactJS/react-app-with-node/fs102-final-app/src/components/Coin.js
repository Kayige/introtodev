// import React from "react";
// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HistoryChart from "./HistoryChart";
import CoinData from "./CoinData";
import coinGecko from "./Axios";
import { Image, Row, Col, Container, Modal } from "react-bootstrap";

const Coin = ({ coin, deleteCoin }) => {
  const padding = { padding: "35px" };
  const [show, setShow] = useState(false);
  const [coinData, setCoinData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${coin.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${coin.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${coin.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: coin.id,
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
    };

    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        <Col sm onClick={handleShow}>
          <Image src={coin.image} alt={coin.name} height="100px" width="auto" />
        </Col>

        <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
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
            {/* Parse the Historical Chart Data into Modal */}
            <HistoryChart data={coinData} />
            {/* Parse the Coin Data into Modal */}
            <CoinData data={coinData.detail} />
          </Modal.Body>
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
