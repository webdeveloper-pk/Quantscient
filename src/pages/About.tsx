import React from "react";
import Navbar from "components/presentation/Navbar";
import Footer from "components/presentation/Footer";
import AboutHero from "components/presentation/about/AboutHero";
import Join from "components/presentation/about/Join";
import AboutMain from "components/presentation/about/AboutMain";

const About = () => {
  return (
    <div className="">
      <Navbar />
      <AboutHero />
      <AboutMain />
      <Join />
      <Footer />
    </div>
  );
};

export default About;
