import React, { useState, useEffect } from "react";
import TrendingCoin from "./TrendingCoin";
import { Card, CardColumns, Container, Row, Col, Form } from "react-bootstrap";
import coinGecko from "./Axios";

const Trending = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await coinGecko.get(
        "/coins/markets?vs_currency=sgd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <h1>Trending Coins</h1>
        <br />
        <Row>
          <Col fluid>
            <Form.Control
              type="text"
              placeholder="Search Filter"
              value={query}
              onChange={onChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <CardColumns>
              {coins
                .filter((coin) => coin.id.includes(query))
                .map((coin) => {
                  return (
                    <Card>
                      <TrendingCoin key={coin.id} coin={coin} />
                    </Card>
                  );
                })}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    );
  };
  return <>{renderCoins()}</>;
};
export default Trending;
