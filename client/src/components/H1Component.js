import React from "react";

function H1Component({ value, attr }) {
  return <h1 className={attr}>{value}</h1>;
}

export default H1Component; 
