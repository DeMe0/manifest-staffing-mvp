import React from "react";

import amazonLogo from "./assets/amazon.png";
import nikeLogo from "./assets/nike.png";
import louisvLogo from "./assets/louisv.png";
import nygiantsLogo from "./assets/nygiants.png";
import hennessyLogo from "./assets/hennessy.png";

const PartnersSection = (props) => {
  return (
    <div className="mainDivs" id="partnersSectionDiv">
      <p>PartnersSectionComponent</p>
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
