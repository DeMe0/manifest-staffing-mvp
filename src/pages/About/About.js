import React from "react";
import giantsPic from "./assets/giantsPic.jpg";

export const About = () => {
  return (
    <div>
      <div className="AboutDiv">
        <div className="leftSideAboutDiv">
          <h1 className="header3">WHAT WE DO</h1>
          <img className="bigImage" src={giantsPic} alt="giantsPic" />
        </div>
        <p className="aboutText">
          Manifest Staffing is your solution for finding exceptional talent and
          staffing. Manifest provides a unique approach to staffing with a focus
          on the employer and the candidate to ensure that both parties have a
          positive experience. We pride ourselves on our ability to quickly and
          efficiently fill temporary or permanent staffing needs accross all
          industries. We understand the importance of matching the right talent
          with the right employer to ensure a successful outcome for everyone.
          We will provide you with a personalized experience to fit your unique
          staffing needs. We stand by our commitment to excellence in customer
          service and satisfaction.
        </p>
      </div>
    </div>
  );
};
