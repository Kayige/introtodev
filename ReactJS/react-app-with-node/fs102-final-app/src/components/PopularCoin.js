import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import { WatchListContext } from "./WatchList";

const PopularCoin = ({ coin }) => {
  const { addCoin } = useContext(WatchListContext);
  const padding = { padding: "35px" };

  return (
    <>
      <Link to={`/coins/${coin.id}`}>
        <Image src={coin.image} alt={coin.name} height="50px" width="50px" />
      </Link>
      <Card.Title>{coin.name}</Card.Title>
      <Card.Body>{coin.current_price}</Card.Body>

      <Card.Text
        className={
          coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"
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
      </Card.Text>

      <Card.Footer>
        <a onClick={() => addCoin(coin.id)} href="#">
          <i className="add-icon fas fa-plus-circle text-success">&nbsp;Add</i>
        </a>
      </Card.Footer>
    </>
  );
};

export default PopularCoin;
