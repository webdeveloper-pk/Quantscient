import React from "react";
import Navbar from "components/presentation/Navbar";
import TeamHero from "components/presentation/team/TeamHero";
import Members from "components/presentation/team/Members";
import Join from "components/presentation/about/Join";
import Footer from "components/presentation/Footer";
import VideoSection from "components/presentation/team/VideoSection";

const Team = () => {
  return (
    <div className="">
      <Navbar />
      <TeamHero />
      <Members />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Team;
