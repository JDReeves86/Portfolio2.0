import React from "react";

function HeroMd({children, spBackground, attr, childAttr }) {
  return (
    <section className={`${attr} ${spBackground}`}>
      <div className={childAttr}>{children}</div>
    </section>
  );
}

export default HeroMd;
