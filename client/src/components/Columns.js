import React from "react";

function Columns({ attr, children }) {
  return (
    <div className={`columns ${attr}`}>
      {children}
    </div>
  );
}

export default Columns; 
