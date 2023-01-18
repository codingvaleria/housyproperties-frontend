import React from "react";
import "./Banner.css";
import apartments from "../../../images/apartments.png";
import family from "../../../images/family.png";
import villa from "../../../images/villa.png";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner({ data, setData }) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="banner-container">
        <h1>Search your next home</h1>
        <p>Find a house in the comfort of your phone</p>
        <Search data={data} setData={setData} />
      </div>
      <div className="feature-container">
        <div className="feature-title" id="property_type">
          <h2>Featured Property Types</h2>
        </div>
        <div className="feature-elements">
          <img src={family} alt="family" />
          <img src={apartments} alt="apartments" />
          <img src={villa} alt="villa" />
        </div>
        <div className="properties-element" id="properties">
          <h1>Our Properties</h1>
          <p
            onClick={() => {
              navigate("/about");
            }}
          >
            Become a Tenant
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
