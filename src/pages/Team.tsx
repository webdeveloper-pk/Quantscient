import React from "react";
import Navbar from "components/presentation/Navbar";
import TeamHero from "components/presentation/team/TeamHero";
import Members from "components/presentation/team/Members";
import Join from "components/presentation/about/Join";
import Footer from "components/presentation/Footer";
import VideoSection1 from "components/presentation/team/VideoSection1";
import VideoSection2 from "components/presentation/team/VideoSection2";
import VideoSection3 from "components/presentation/team/VideoSection3";

const Team = () => {
  return (
    <div className="">
      <Navbar />
      <TeamHero />
      <Members />
      <VideoSection1 />
      <VideoSection2 />
      <VideoSection3 />
      <Footer />
    </div>
  );
};

export default Team;
