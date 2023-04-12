import React from "react";
import "./assets/bullhorn-solid.svg";

const CustomCard = (props) => {
  const { image, title, description, link } = props;

  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt="card"
          style={{ maxWidth: "100%", marginBottom: "10px" }}
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <button className="cardButtons">
          <a href={link} style={{ display: "block", margin: "10px 0 0 0" }}>
            Learn More
          </a>
        </button>
      )}
    </div>
  );
};

export default CustomCard;
