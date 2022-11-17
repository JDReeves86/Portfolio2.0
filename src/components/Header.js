import React from "react";
import HeadShot from "./headShot";

function Header() {
  const name = "Jacob Reeves";

  return (
    <section className="hero mtnBackground">
      <div className="hero-body level">
        <div className="level-left">
          <HeadShot />
          <h1 className="level-item is-size-1 has-text-weight-bold">{name}</h1>
        </div>
      </div>
    </section>
  );
}

export default Header
