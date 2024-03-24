import React from "react";
import Navbar from "components/presentation/Navbar";
import Hero from "components/presentation/Hero";
import Footer from "components/presentation/Footer";
import Working from "components/presentation/Working";

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
