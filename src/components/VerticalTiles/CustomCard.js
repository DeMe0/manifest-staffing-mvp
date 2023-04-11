import React from "react";

const CustomCard = (props) => {
  const { image, title, description, link } = props;

  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      {image && (
        <img
          src={image}
          alt="card"
          style={{ maxWidth: "100%", marginBottom: "10px" }}
        />
      )}
      <h3 style={{ margin: "0", fontSize: "18px" }}>{title}</h3>
      <p style={{ margin: "10px 0 0 0" }}>{description}</p>
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
