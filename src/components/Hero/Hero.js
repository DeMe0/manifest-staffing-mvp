import React from "react";
import timberlandPhoto from "./assets/Timberland-trailer.jpg";

const Hero = (props) => {
  return (
    <div className="mainDivs" id="heroDiv">
      <div className="mainFlexBox" id="heroFlexBox">
        <h2 className="header" id="slogan">
          Don't Stress, Manifest
        </h2>
        <h3>Connecting employers with extraordinary staffing!</h3>
        <img src={timberlandPhoto} alt="timberlandPhoto" />
      </div>
    </div>
  );
};

export default Hero;
