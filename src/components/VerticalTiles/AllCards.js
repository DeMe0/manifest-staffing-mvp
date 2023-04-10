import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import data from "./data.json";
import "./Cards.css";

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
        />
      ))}
    </div>
  );
};

export default AllCards;
