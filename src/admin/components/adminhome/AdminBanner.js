import React from "react";
import "./AdminBanner.css";
import apartments from "../../../images/apartments.png";
import family from "../../../images/family.png";
import villa from "../../../images/villa.png";

export default function AdminBanner() {
  return (
    <React.Fragment>
      <div className="property-container">
        <div className="property-title">
          <h2> Property Types</h2>
          <p> Select property to view all actions</p>
        </div>
        <div className="property-elements">
          <img src={family} />
          <img src={apartments} />
          <img src={villa} />
        </div>
      </div>
    </React.Fragment>
  );
}
