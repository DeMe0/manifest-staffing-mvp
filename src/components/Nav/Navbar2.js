import React, { useState } from "react";
import NavbarLogo from "./images/navbarLogo.png";
import "./Navbar.css";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={NavbarLogo} alt="Manifest Staffing" />
        <h3>Manifest Staffing</h3>
      </div>
      <div className="navbar-menu">
        <div className="navbar-hamburger" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`navbar-menu-items ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
