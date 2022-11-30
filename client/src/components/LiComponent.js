import React from "react";
import Span from "./Span";

function LiComponent({ values, attr }) {
  const keys = Object.keys(values);
  return keys.map((el) => {
    return (
      <li className={attr} key={values[el].id}>
        {el}: <Span attr="has-text-weight-normal" value={values[el].text}/>
      </li>
    );
  });
}

export default LiComponent;
