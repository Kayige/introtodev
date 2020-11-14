import React, { useContext } from "react";
import { WatchListContext } from "./WatchList";
import { Dropdown } from "react-bootstrap";
const AddCoin = () => {
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "cardano",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic-button">Add Item</Dropdown.Toggle>
        <Dropdown.Menu>
          {availableCoins.map((el) => {
            return (
              <Dropdown.Item onClick={() => handleClick(el)}>
                {el}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default AddCoin;
