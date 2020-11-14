import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import { WatchListContext } from "./WatchList";

const TrendingCoin = ({ coin }) => {
  const { addCoin } = useContext(WatchListContext);

  return (
    <>
      <Link to={`/coins/${coin.id}`}>
        <Card.Body>
          <Image src={coin.image} width={25} height={25} />
          {coin.name}
        </Card.Body>
      </Link>

      <Card.Footer>
        <a onClick={() => addCoin(coin.id)} href="#">
          <i className="add-icon fas fa-plus-circle text-success"></i>
        </a>
      </Card.Footer>
    </>
  );
};
export default TrendingCoin;
