import React, { useState } from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
import "./Addpropertyform.css";
import { useNavigate } from "react-router-dom";

function Addpropertyform(onAddProperty) {
  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setProperty_type] = useState("");
  const [unitType, setUnit_type] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [wifi, setWifi] = useState("");
  const [shower, setShower] = useState("");
  const [balcony, setBalcony] = useState("");
  const [parking, setParking] = useState("");
  const formData = {
    propertyName: "",
    property_type: "",
    unit_type: "",
    location: "",
    image: "",
    amount: "",
    wifi: true,
    shower: true,
    balcony: true,
    parking: true,
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    const property = {
      propertyName: propertyName,
      property_type: propertyType,
      unit_type: unitType,
      location: location,
      image: image,
      amount: amount,
      wifi: true,
      shower: true,
      balcony: true,
      parking: true,
    };

    console.log(property);
    e.preventDefault();
    fetch("https://housy-properties-production.up.railway.app/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    }).then((resp) => {
      if (resp.ok) {
        alert("propertyhas been successfully added");
        e.reset();
      }
    });
  }

  return (
    <div>
      <AdminNavBar />
      <div className="form-wrapper">
        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="title">Add Property Form </div>
          <div className="property-form">
            <div className="input-field">
              <i className="icon fa fa-home" aria-hidden="true"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Property Name"
                id="Property Name"
                name="Property Name"
                onChange={(e) => setPropertyName(e.target.value)}
                value={propertyName}
              />
            </div>
            <div className="input-field">
              <div className="custom-select">
                <i className="icon fa fa-home" aria-hidden="true"></i>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Property Type"
                  id="Location"
                  name="Location"
                  onChange={(e) => setProperty_type(e.target.value)}
                  value={propertyType}
                />
              </div>
            </div>
            <div className="input-field">
              <div className="custom-select">
                <i className="icon fa fa-home" aria-hidden="true"></i>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Unit Type"
                  id="Location"
                  name="Location"
                  onChange={(e) => setUnit_type(e.target.value)}
                  value={unitType}
                />
              </div>
            </div>
            <div className="input-field">
              <i className="icon fa fa-map-marker" aria-hidden="true"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Location"
                id="Location"
                name="Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="input-field">
              <i className="icon fa fa-picture-o" aria-hidden="true"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Image"
                id="Image"
                name="Image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <div className="input-field">
              <i className="icon fa fa-money" aria-hidden="true"></i>
              <input
                className="form-control"
                type="number"
                placeholder="Amount"
                id="Amount"
                name="Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
            <div className="facilities-wrapper">
              Facilities
              <div className="check-field">
                <label> Wifi</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Wifi"
                  name="Wifi"
                  onChange={(e) => setWifi(e.target.value)}
                  value={wifi}
                />
              </div>
              <div className="check-field">
                <label> Shower</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Shower"
                  name="Shower"
                  onChange={(e) => setShower(e.target.value)}
                  value={shower}
                />
              </div>
              <div className="check-field">
                <label> Balcony</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Balcony"
                  name="Balcony"
                  onChange={(e) => setBalcony(e.target.value)}
                  value={balcony}
                />
              </div>
              <div className="check-field">
                <label>Parking</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Parking"
                  name="Parking"
                  onChange={(e) => setParking(e.target.value)}
                  value={parking}
                />
              </div>
            </div>

            <div className="submit-wrapper">
              <input
                type="submit"
                value="Add Property"
                onSubmit={handleSubmit}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addpropertyform;
