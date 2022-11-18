import React from "react";

function InputControl({ values }) {
  return (
    <div className="control">
      <input className="input" type="text" placeholder={values}></input>
    </div>
  );
}

export default InputControl;
