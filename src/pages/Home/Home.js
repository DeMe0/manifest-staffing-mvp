import React from "react";
import Hero from "../../components/Hero/Hero";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import AllCards from "../../components/VerticalTiles/AllCards";
import JotformEmbed from "react-jotform-embed";

const Home = (props) => {
  return (
    <div className="pageDiv" id="homeDiv">
      {/* <Navbar /> */}
      <Hero />
      <PartnersSection />
      <MissionStatement />
      <AllCards />
      <JotformEmbed
        className="jotform-form"
        src="https://www.jotform.com/230997765313163"
      />
    </div>
  );
};

export default Home;
