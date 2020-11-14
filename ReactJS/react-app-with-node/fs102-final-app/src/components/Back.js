import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Back() {
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <>
      <Button variant="primary" size="lg" onClick={() => handleClick()}>
        Back
      </Button>
    </>
  );
}
