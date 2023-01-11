import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import "./About.css"
import Image from "../../../images/apa.png";
import Pic from "../../../images/apart2.jpg";


function About() {
  return(<>
    <Navbar/>
    <div className="about">

        <h1>About Us</h1>
        <img src={Image} alt="" />

            <div className="about_text">
                <div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat. <br></br>Duis aute irure dolor in reprehenderit in voluptate velit<br></br> esse cillum dolore eu fugiat nulla pariatur. <br></br>Excepteur sint occaecat cupidatat non proident, <br></br>sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                <div><img src={Pic} alt="apart2"/></div>
            </div>
          
        <Footer/>
    </div>
    </>
)
}

export default About;