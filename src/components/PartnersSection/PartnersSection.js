import React from "react";

import amazonLogo from "./assets/amazon.png";
import nikeLogo from "./assets/nike.png";
import louisvLogo from "./assets/louisv.png";
import nygiantsLogo from "./assets/nygiants.png";
import hennessyLogo from "./assets/hennessy.png";
import netsLogo from "./assets/nets.png";
import oakleyLogo from "./assets/oakley.png";
import toppsLogo from "./assets/topps.png";
import jordanLogo from "./assets/jordan.png";
import champsLogo from "./assets/champs.png";

const PartnersSection = (props) => {
  return (
    <div className="mainDivs" id="partnersSectionDiv">
      <div className="mainFlexBox" id="partnersFlexBox">
        <img src={amazonLogo} alt="amazonLogo" />
        <img src={nikeLogo} alt="nikeLogo" />
        <img src={nygiantsLogo} alt="nygiantsLogo" />
        <img src={louisvLogo} alt="louisvLogo" />
        <img src={netsLogo} alt="netsLogo" />
        <img src={champsLogo} alt="champsLogo" />
        <img src={jordanLogo} alt="jordanLogo" />
        <img src={toppsLogo} alt="toppsLogo" />
        <img src={oakleyLogo} alt="oakleyLogo" />
        <img src={hennessyLogo} alt="hennessyLogo" />
      </div>
    </div>
  );
};

export default PartnersSection;
