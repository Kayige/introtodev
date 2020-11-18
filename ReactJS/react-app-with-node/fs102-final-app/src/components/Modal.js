import React, { useState, useEffect } from "react";
import HistoryChart from "./HistoryChart";
import CoinData from "./CoinData";
import coinGecko from "./Axios";
import { Modal, Col, Image } from "react-bootstrap";

const ModalDetail = ({ coin }) => {
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
    <>
      <Col sm onClick={handleShow}>
        <Image src={coin.image} alt={coin.name} height="100px" width="auto" />
      </Col>

      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{coin.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HistoryChart data={coinData} />
          <CoinData data={coinData.detail} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDetail;
