import React from "react";
import { Link } from "react-router-dom";

import amazonLogo from "./assets/amazon.png";
import nikeLogo from "./assets/nike.png";
import louisvLogo from "./assets/louisv.png";
import nygiantsLogo from "./assets/nygiants.png";
import hennessyLogo from "./assets/hennessy.png";

const PartnersSection = (props) => {
  return (
    <div className="mainDivs" id="partnersSectionDiv">
      <Link to={"/about"}>About</Link>
      <Link to={"/contact-us"}>Contact</Link>
      <div className="mainFlexBox" id="partnersFlexBox">
        <img src={amazonLogo} alt="amazonLogo" />
        <img src={nikeLogo} alt="nikeLogo" />
        <img src={nygiantsLogo} alt="nygiantsLogo" />
        <img src={louisvLogo} alt="louisvLogo" />
        <img src={hennessyLogo} alt="hennessyLogo" />
      </div>
    </div>
  );
};

export default PartnersSection;
