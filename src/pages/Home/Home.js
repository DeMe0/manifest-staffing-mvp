import React from "react";
import Hero from "../../components/Hero/Hero";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import AllCards from "../../components/AllCards/AllCards";

const Home = (props) => {
  return (
    <div className="pageDiv" id="homeDiv">
      <Hero />
      <PartnersSection />
      <MissionStatement />
      <AllCards />
    </div>
  );
};

export default Home;
