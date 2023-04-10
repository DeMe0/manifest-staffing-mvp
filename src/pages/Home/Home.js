import React from "react";
import Hero from "../../components/Hero/Hero";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import VerticalTiles from "../../components/VerticalTiles/VerticalTiles";
import Navbar from "../../components/Nav/Navbar";
import AllCards from "../../components/VerticalTiles/AllCards";

const Home = (props) => {
  return (
    <div className="pageDiv" id="homeDiv">
      {/* <Navbar /> */}
      <Hero />
      <PartnersSection />
      <MissionStatement />
      <AllCards />
    </div>
  );
};

export default Home;
