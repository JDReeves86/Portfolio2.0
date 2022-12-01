import React from "react";

function InputControl({ value, name, change, attr, type }) {
  return (
    <div className="control">
      <input
        className={`input ${attr}`}
        type={type}
        name={name}
        placeholder={name}
        onChange={change}
        value={value}
      ></input>
    </div>
  );
}

export default InputControl; 
