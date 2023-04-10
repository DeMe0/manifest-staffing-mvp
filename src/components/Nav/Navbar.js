import React from "react";
import NavbarLogo from "./images/navbarLogo.png";

const Navbar = (props) => {
  return (
    <div className="mainDivs" id="navbarDiv">
      <div className="MainFlexBox" id="navbarFlexBox">
        <div id="navbarLogo">
          <img src={NavbarLogo} alt="NavbarLogo"></img>
          <h3>anifest Staffing</h3>
        </div>
        <div id="hamburgerIcon">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
