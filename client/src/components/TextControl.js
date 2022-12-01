import React from "react";

function TextControl({ value, name, change, attr, rows }) {
  return (
    <div className="control">
      <textarea
        className={`textarea ${attr}`}
        type="text"
        rows={rows}
        placeholder={name}
        name={name}
        onChange={change}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextControl; 
