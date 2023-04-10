import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <div className="mainDivs" id="footerDiv">
      <p>FooterComponent</p>
      <div className="mainFlexBox" id="footerFlexBox">
        <a href="/">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
