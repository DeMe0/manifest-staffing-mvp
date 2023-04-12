import React from "react";
import timberlandPhoto from "./assets/Timberland-trailer.jpg";

const Hero = (props) => {
  return (
    <div className="mainDivs" id="heroDiv">
      <div className="mainFlexBox" id="heroFlexBox">
        <div>
          <h2 className="header" id="slogan">
            Don't Stress, Manifest!
          </h2>
          <h3 className="header2">
            Connecting employers with extraordinary staffing!
          </h3>
        </div>
        <div className="img-wrapper">
          <img
            src={timberlandPhoto}
            alt="timberlandPhoto"
            className="bigImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
