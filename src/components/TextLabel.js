import React from "react";
import TextControl from "./TextControl";

function TextLabel({ attr, values }) {
  return values.map((el) => {
    return (
      <div>
        <label className={attr}>{el}</label>
        <TextControl values={el} />
      </div>
    );
  });
}

export default TextLabel;