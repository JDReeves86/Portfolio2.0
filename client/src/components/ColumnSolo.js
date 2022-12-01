import React from "react";

function ColumnSolo({ attr, children }) {
    return (
        <div className={`column ${attr}`}>
            {children}
        </div>
    )
}

export default ColumnSolo 