import React from "react";
import ColumnSolo from "./ColumnSolo";

function Columns({ attr, children, childAttr }) {
  return (
    <div className={`columns ${attr}`}>
      <ColumnSolo attr={childAttr}>{children}</ColumnSolo>
    </div>
  );
}

export default Columns;
