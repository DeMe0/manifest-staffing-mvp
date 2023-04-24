import React from "react";
import JotformEmbed from "react-jotform-embed";

export const Contact = () => {
  return (
    <div className="pageDiv" id="contactDiv">
      <div className="contactTextDiv">
        <h3 className="header" id="areYouTrying">
          Are You Trying to Get In Touch With Us?
        </h3>
        <h4 className="header" id="feelFree">
          Feel free to reach out to us at info@manifeststaffing.com
        </h4>
        <h4 className="header" id="wouldYouLike">
          Would you like us to reach out to you?
        </h4>
        <h4 className="header" id="feelFree">
          Please complete the following form
        </h4>
      </div>
      <JotformEmbed
        className="jotform-form"
        src="https://www.jotform.com/230997765313163"
      />
    </div>
  );
};
