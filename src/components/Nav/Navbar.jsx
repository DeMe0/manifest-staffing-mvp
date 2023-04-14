import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import navbarLogo from "./images/navbarLogo.png";

const Nav = styled.nav`
  width: 95%;
  height: 10%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  .logo {
    padding: 30px 0;
  }
  .navbarFlexBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .mLogo {
    width: 10vh;
    height: auto;
  }
  .leftSideNav {
    display: flex;
    flex-direction: row;
  }
  .logoText {
    white-space: nowrap;
    padding: 0;
    font-weight: bold;
    text-shadow: 1px 1px 2px #ffffff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="navbarFlexBox">
        <div className="leftSideNav">
          <a href="/">
            <img className="mLogo" src={navbarLogo} alt="M-logo"></img>
          </a>
          <p className="logoText">anifest Staffing</p>
        </div>
        <div className="rightSideNav">
          <Burger />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
