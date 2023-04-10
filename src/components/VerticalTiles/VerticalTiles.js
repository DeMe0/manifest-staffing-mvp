import React from "react";

const VerticalTiles = () => {
  const verticalsData = [
    {
      id: 1,
      cardTitle: "Marketing",
      cardDescription:
        "Providing you with marketing specialists who are in touch with today's consumer.",
      cardLink: "",
    },
    {
      id: 2,
      cardTitle: "Logistics",
      cardDescription:
        "Experts are ready to help assure your event is planned well and executed to perfection.",
      cardLink: "placeholder",
    },
    {
      id: 3,
      cardTitle: "Production",
      cardDescription: "We are here to set up your next big production event!",
      cardLink: "placeholder",
    },
    {
      id: 4,
      cardTitle: "Loading",
      cardDescription:
        "In need of some extra hands around the workplace? Let Manifest Staffing provide you with the experienced staff you need!",
      cardLink: "placeholder",
    },
    {
      id: 5,
      cardTitle: "Delivery",
      cardDescription:
        "Our delivery coordinators have you covered with prompt and pristine delivery services!",
      cardLink: "placeholder",
    },
  ];

  return (
    <div className="mainFlexBox" id="verticalTilesFlexBox">
      {verticalsData.map((item) => (
        <div className="verticalTilesCards" key={item.id}>
          <h3 className="cardTitle">{item.cardTitle}</h3>
          <p className="cardText">{item.cardDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default VerticalTiles;
