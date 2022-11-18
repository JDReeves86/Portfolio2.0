import React from "react";

function TextControl({ values }) {
  return (
    <div className="control">
      <textarea
        className="textarea"
        type="text"
        placeholder={values}
      ></textarea>
    </div>
  );
}

export default TextControl;
