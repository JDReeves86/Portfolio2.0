import React from "react";

function InputControl({ value, name, change }) {
  return (
    <div className="control">
      <input
        className="input"
        type="text"
        name={name}
        placeholder={name}
        onChange={change}
        value={value}
      ></input>
    </div>
  );
}

export default InputControl;
