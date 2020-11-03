import React, { useEffect, useState } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({ images: {} });

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await data.json();
    setItem(item.data);
    console.log(item.data);
  };

  return (
    <div>
      <h1>Item</h1>
      <h1>{item.name}</h1>
      {item.images.background}
    </div>
  );
}

export default ItemDetail;
