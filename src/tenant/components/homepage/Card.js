import React from "react";
import "./Card.css";

function Card({
  image,
  estateName,
  title,
  network,
  shower,
  unitType,
  balcony,
  price,
}) {
  return (
    <div className="MainHeader">
      <div className="card">
        <img src={image} alt="" width={300} />
        <div className="cardInfo">
          <h6 className="estate">{estateName}</h6>
          <h4>{title}</h4>
          <div className="infoSections">
            <div className="section1">
              <div className="infoicons">
                <h6>{network}</h6>
              </div>
              <div className="infoicons">
                <h6>{shower}</h6>
              </div>
            </div>
            <div className="section2">
              <div className="infoicons">
                <h6>{unitType}</h6>
              </div>
              <div className="infoicons">
                <h6>{balcony}</h6>
              </div>
            </div>
          </div>
          <button>{price}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
