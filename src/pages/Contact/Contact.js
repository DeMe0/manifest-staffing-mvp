import React from "react";
import { Link } from "react-router-dom";
import JotformEmbed from "react-jotform-embed";

export const Contact = () => {
  return (
    <div className="pageDiv" id="contactDiv">
      <div>
        <h3>Are You Trying to Get In Touch With Us?</h3>
        <h4>Feel free to reach out to us at info@manifeststaffing.com</h4>
        <h4>Would you like us to reach out to you?</h4>
        <p>
          Please complete the following form and we will reach out within 24
          hours.
        </p>
      </div>
      <JotformEmbed
        className="jotform-form"
        src="https://www.jotform.com/230997765313163"
      />
    </div>
  );
};
