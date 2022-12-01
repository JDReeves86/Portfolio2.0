import React from "react";
import PComponent from "./PComponent";

function NavCounter({ hits }) {
  return <PComponent value={[`Visits: ${hits}`]} attr="pr-6" />;
}

export default NavCounter;
