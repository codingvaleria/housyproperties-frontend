import React from "react";
import { useState } from "react";
import Housecards from "./Housecards";
import "./Housecards.css";
import Banner from "./Banner";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Home() {
  let [data, setData] = useState("");

  return (
    <div>
      <Navbar />
      <Banner data={data} setData={setData} />
      <Housecards data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default Home;
