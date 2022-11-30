import React from "react";

function Span({ value, attr }) {
  return <span className={attr}>{value}</span>;
}

export default Span;
