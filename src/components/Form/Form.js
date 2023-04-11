import React, { Component } from "react";
import { Form } from "react-router-dom";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <iframe
          id="JotFormIFrame-230997765313163"
          title="Contact Me"
          allowtransparency="true"
          allowFullScreen={true}
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/230997765313163"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="no"
        />
      </div>
    );
  }
}

export default ContactForm;
