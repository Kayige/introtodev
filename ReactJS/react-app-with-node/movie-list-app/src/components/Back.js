import React from "react";
import { useHistory } from "react-router-dom";

export function Back() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <button className="btn" onClick={() => handleClick()}>
        Back
      </button>
    </>
  );
}
