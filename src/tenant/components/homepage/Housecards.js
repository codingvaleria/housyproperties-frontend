import React from "react";
// import data from "./data";
import { useState, useEffect } from "react";
import "./Card.css";

function Housecards() {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://housy-properties-production.up.railway.app/properties"
        );
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(properties, data);

  if (isLoading) {
    <div className="houses">
      <p>Loading ....</p>
    </div>;
  }

  if (!data) {
    return (
      <div className="houses">
        <p>No data</p>
      </div>
    );
  }

  function handleShower(b) {
    if (b === true) {
      return "Shower";
    } else {
      return "No Shower";
    }
  }

  function handleWifi(b) {
    if (b === true) {
      return "Wifi";
    } else {
      return "No Wifi";
    }
  }

  function handleParking(b) {
    if (b === true) {
      return "Parking";
    } else {
      return "No Parking";
    }
  }

  function handleBalcony(b) {
    if (b === true) {
      return "Balcony";
    } else {
      return "No Balcony";
    }
  }

  let properties = data.map((e) => {
    return (
      <div className="card">
        {/* set background image for styling images with unstandard size */}
        <div
          className="hse-image"
          style={{ backgroundImage: `url(${e.image})` }}
        />
        <div className="cardInfo">
          <h6 className="estate">{e.propertyName}</h6>
          <h4>{`${e.unit_type} ${e.property_type} ${e.location}`}</h4>
          <div className="infoSections">
            <div className="section1">
              <div className="infoicons">
                <h6>
                  <i className="symbol fa fa-wifi" aria-hidden="true"></i>
                  {handleWifi(e.wifi)}
                </h6>
              </div>
              <div className="infoicons">
                <h6>
                  <i className=" symbol fa fa-shower" aria-hidden="true"></i>
                  {handleShower(e.shower)}
                </h6>
              </div>
            </div>
            <div className="section2">
              <div className="infoicons">
                <h6>
                  <i className=" symbol fa fa-car" aria-hidden="true"></i>
                  {handleParking(e.parking)}
                </h6>
              </div>
              <div className="infoicons">
                <i className="symbol fa fa-bath" aria-hidden="true"></i>
                <h6>{handleBalcony(e.balcony)}</h6>
              </div>
            </div>
          </div>
          <button className="price-button">{e.amount}</button>
        </div>
      </div>
    );
  });

  return (
    <div className="houses">
      <div className="cards-container">{properties}</div>
    </div>
  );
}

export default Housecards;
