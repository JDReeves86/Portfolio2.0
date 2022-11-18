import React from "react";
import InputControl from "./InputControl";

function InputLabel({ attr, values }) {
  return values.map((el, i) => {
    return (
      <div>
        <label key={i} className={attr}>{el}</label>
        <InputControl values={el} />
      </div>
    );
  });
}

export default InputLabel;
