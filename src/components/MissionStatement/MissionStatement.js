import React from "react";
import theShop from "./assets/theShop.jpeg";

const MissionStatement = (props) => {
  return (
    <div className="mainDivs" id="missionStatementDiv">
      <p>MissionStatementComponent</p>
      <div className="mainFlexBox" id="missionStatementFlexBox">
        <img src={theShop} alt="theShop.jpeg" />
        <h2>Our Mission Statement</h2>
        <p>
          Let us be the bridge between your perfect event and the staff who work
          it. We will provide the highest quality staffer within each industry
          regardless of the niche you serve. We are a truested company with
          amazing experience and capabilities to cater to your wants and needs.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
