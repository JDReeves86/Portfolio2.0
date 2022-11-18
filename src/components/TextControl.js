import React from "react";

function TextControl({ value, name, change }) {
  return (
    <div className="control">
      <textarea
        className="textarea"
        type="text"
        placeholder={name}
        name={name}
        onChange={change}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextControl;
