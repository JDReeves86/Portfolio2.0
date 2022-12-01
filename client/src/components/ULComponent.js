import React from "react";
import LiComponent from "./LiComponent";

function ULComponent({ listItems }) {
  return (
    <ul>
      <LiComponent values={listItems} attr="has-text-weight-bold" />
    </ul>
  );
}

export default ULComponent;
