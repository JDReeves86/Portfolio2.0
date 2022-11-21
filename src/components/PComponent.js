import React from "react";

function PComponent({ value, attr }) {
  return typeof value == "string" ? (
    <p className={attr}>{value}</p>
  ) : (
    value.map((el, i) => {
      return (
        <p key={i} className={attr}>
          {el}
        </p>
      );
    })
  );
}

export default PComponent;
