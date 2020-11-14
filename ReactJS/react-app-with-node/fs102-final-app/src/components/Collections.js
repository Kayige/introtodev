import React, { useState } from "react";

export default function Collections() {
  let [responseObj, setResponseObj] = useState({});
  setResponseObj({});

  fetch("https://behanceraygorodskijv1.p.rapidapi.com/getAllCollections", {
    method: "POST",
    headers: {
      "x-rapidapi-key": "01ffe95c9emsh04736479fe2e6ccp16ef0bjsnf689425272b7",
      "x-rapidapi-host": "BehanceraygorodskijV1.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      setResponseObj(response);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <div>
      <h1>Behance Collections</h1>
      {responseObj}
    </div>
  );
}
