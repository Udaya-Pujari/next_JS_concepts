import Link from "next/link";
import React from "react";

const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="links-container">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/portfolio">
            Portfolio
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navigationbar;
