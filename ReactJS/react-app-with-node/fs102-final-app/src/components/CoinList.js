import React, { useEffect, useState, useContext } from "react";
import coinGecko from "./Axios";
import { WatchListContext } from "./WatchList";
import Coin from "./Coin";
import { ListGroup } from "react-bootstrap";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ListGroup>
        {coins.map((coin) => {
          return (
            <ListGroup.Item>
              <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };

  return <>{renderCoins()}</>;
};

export default CoinList;
