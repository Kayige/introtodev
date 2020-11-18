import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { WatchListContext } from "./WatchList";
import ModalDetail from "./ModalDetail";

const TrendingCoin = ({ coin }) => {
  const { addCoin } = useContext(WatchListContext);

  return (
    <>
      <ModalDetail coin={coin} />
      <br />
      <p>{coin.name}</p>
      <Card.Footer>
        <a onClick={() => addCoin(coin.id)} href="#">
          <i className="add-icon fas fa-plus-circle text-success">&nbsp;Add</i>
        </a>
      </Card.Footer>
    </>
  );
};
export default TrendingCoin;
