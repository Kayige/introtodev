import React, { useState, useEffect } from "react";
import PopularCoin from "./PopularCoin";
import { Row, Col, Card, CardColumns, Container, Form } from "react-bootstrap";
import coinGecko from "./Axios";

export const Popular = () => {
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
      console.log(response.data);
    }
    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <br />
        <h1>Popular Crypto Currencies</h1>
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
        <Col>
          <CardColumns>
            {coins
              .filter((coin) => coin.id.includes(query))
              .map((coin) => {
                return (
                  <Card>
                    <PopularCoin key={coin.id} coin={coin} />
                  </Card>
                );
              })}
          </CardColumns>
        </Col>
      </Container>
    );
  };
  return <>{renderCoins()}</>;
};

export default Popular;
