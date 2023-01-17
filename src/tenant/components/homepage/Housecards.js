import React from "react";
// import data from "./data";
import { useState, useEffect } from "react";
import "./Card.css";
import Card from "./Card";

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
      <Card
        key={e.id}
        propertyName={e.propertyName}
        property_type={e.property_type}
        unit_type={e.unit_type}
        location={e.location}
        image={e.image}
        wifi={handleWifi(e.wifi)}
        shower={handleShower(e.shower)}
        balcony={handleBalcony(e.balcony)}
        parking={handleParking(e.parking)}
        amount={e.amount}
      />
    );
  });

  return (
    <div className="houses">
      <div className="cards-container">{properties}</div>
    </div>
  );
}

export default Housecards;
