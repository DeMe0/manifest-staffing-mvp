import React, { useState } from "react";
import NavbarLogo from "./images/navbarLogo.png";
import "./Navbar.css";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    console.log(!menuOpen);
  };

  return (
    <div className="mainDivs" id="navbarDiv">
      <div className="mainFlexBox" id="navbarFlexBox">
        <div id="navbarLogo">
          <img src={NavbarLogo} alt="NavbarLogo"></img>
          <h3>anifest Staffing</h3>
        </div>
        <div id="hamburgerIcon" onClick={handleMenuClick}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        {menuOpen ? (
          <div id="menuItems">
            <div id="menuOpen" onClick={handleMenuClick}>
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect
                  width="100"
                  height="20"
                  transform="rotate(45) translate(50, -60)"
                ></rect>
                <rect
                  width="100"
                  height="20"
                  transform="rotate(-45) translate(-50, 60)"
                ></rect>
              </svg>
            </div>
            <ul>
              <li>Menu item 1</li>
              <li>Menu item 2</li>
              <li>Menu item 3</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
