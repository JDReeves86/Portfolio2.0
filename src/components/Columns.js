import React from "react";
import ColumnSolo from "./ColumnSolo";

function Columns ({ attr }) {
    return (
        <div className={`columns ${attr}`}>
            <ColumnSolo attr='is-full'/>
        </div>
    )
}

export default Columns