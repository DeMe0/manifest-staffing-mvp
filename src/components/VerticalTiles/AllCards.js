import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import data from "./data.json";
import "./Cards.css";
import "./assets/brush-solid.svg";
import "./assets/bullhorn-solid.svg";
import "./assets/truck-solid.svg";

const AllCards = () => {
  const [verticals, setVerticals] = useState([]);

  useEffect(() => {
    setVerticals(data.verticals);
  }, []);

  return (
    <div className="mainFlexBox" id="cardsFlexBox">
      {verticals.map((vertical) => (
        <CustomCard
          key={vertical.id}
          title={vertical.cardTitle}
          description={vertical.cardDescription}
          link={vertical.cardLink}
          image={vertical.cardImage}
        />
      ))}
    </div>
  );
};

export default AllCards;
