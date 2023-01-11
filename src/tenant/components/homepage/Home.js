import React from "react";
import Housecards from "./Housecards";
import "./Housecards.css";
import Banner from "./Banner";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Housecards />
      <Footer />
    </div>
  );
}

export default Home;
