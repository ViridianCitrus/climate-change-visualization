import React, { useState } from "react";

export const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/#" title="Home">
          <img alt="website logo" src={"logo.png"} className="navIcon" />
          Logo + Name
        </a>
        <div className="navItems">
          <a title="Home" href="/#">
            Home
          </a>
          <a title="Report" href="/report">
            Report
          </a>
        </div>
      </nav>
    </div>
  );
};
