import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";

const Footer = (props) => {
  return (
    <div className="mainDivs" id="footerDiv">
      <p>FooterComponent</p>
      <div className="mainFlexBox" id="footerFlexBox">
        <a href="/">
          <img src={instagramIcon} alt="instagramIcon" />
        </a>
        <a href="/">
          <img src={linkedinIcon} alt="linkedinIcon" />
        </a>
        <a href="/">
          <img src={facebookIcon} alt="facebookIcon" />
        </a>
      </div>
      <p>Manifest Staffing LLC. All rights reserved.</p>
    </div>
  );
};

export default Footer;
