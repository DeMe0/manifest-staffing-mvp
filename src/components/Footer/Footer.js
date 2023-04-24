import React from "react";

import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";
import navbarLogo from "./assets/blue-logo-full.png";

const Footer = (props) => {
  return (
    <div className="mainDivs" id="footerDiv">
      <br />
      <h3 className="footerText">Connect with us!</h3>
      <div className="connectDiv">
        <p>E-mail: info@manifeststaffing.com</p>
        <a href="/contact-us">
          <p>Contact Us</p>
        </a>
      </div>
      <div className="footerLogo">
        <img src={navbarLogo} alt="navbarLogo" />
      </div>

      <div className="mainFlexBox" id="footerFlexBox">
        <a href="/">
          <img src={instagramIcon} alt="instagramIcon" className="footerIcon" />
        </a>
        <a href="https://www.linkedin.com/in/manifest-staffing-ba2b68270/">
          <img src={linkedinIcon} alt="linkedinIcon" className="footerIcon" />
        </a>
        <a href="/">
          <img src={facebookIcon} alt="facebookIcon" className="footerIcon" />
        </a>
      </div>
      <p>Manifest Staffing LLC. All rights reserved.</p>
      <br />
    </div>
  );
};

export default Footer;
