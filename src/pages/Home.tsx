import React from "react";
import Navbar from "components/presentation/Navbar";
import Working from "components/presentation/Working";
import Footer from "components/presentation/Footer";
import Hero from "components/presentation/Hero";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Working />
      <Footer />
    </div>
  );
};

export default Home;
