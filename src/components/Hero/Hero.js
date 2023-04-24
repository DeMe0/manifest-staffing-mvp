import React from "react";
import netsPhoto from "./assets/nets-event.jpeg";

const Hero = (props) => {
  return (
    <div className="mainDivs" id="heroDiv">
      <div className="mainFlexBox" id="heroFlexBox">
        <div>
          <h2 className="header" id="slogan">
            Don't Stress - Manifest!
          </h2>
          <h3 className="header2">Staffing you with extraordinary</h3>
        </div>
        <div className="img-wrapper">
          <img src={netsPhoto} alt="timberlandPhoto" className="bigImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
