import React, { useState } from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
import "./Addpropertyform.css";
import { useNavigate } from "react-router-dom";

function Addpropertyform({ property, setProperty }) {
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    unitType: "",
    location: "",
    image: "",
    amount: 0,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    console.log(formData);
    e.preventDefault();
    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setProperty([...property, data]);
        navigate("/admin/viewproperty");
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
              <i class="icon fa fa-home" aria-hidden="true"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Property Name"
                id="Property Name"
                name="Property Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <div className="custom-select">
                <i class="icon fa fa-home" aria-hidden="true"></i>
                <select>
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Family House">Family House</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="custom-select">
                <i class="icon fa fa-home" aria-hidden="true"></i>
                <select>
                  <option value="">Unit Type</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedroom">2 Bedroom</option>
                  <option value="3 Bedroom">3 Bedroom</option>
                  <option value="4 Bedroom">4 Bedroom</option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <i class="icon fa fa-map-marker" aria-hidden="true"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Location"
                id="Location"
                name="Location"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i class="icon fa fa-picture-o" aria-hidden="true"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Image"
                id="Image"
                name="Image"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i class="icon fa fa-money" aria-hidden="true"></i>
              <input
                className="form-control"
                type="number"
                placeholder="Amount"
                id="Amount"
                name="Amount"
                onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="check-field">
                <label> Shower</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Shower"
                  name="Shower"
                  onChange={handleChange}
                />
              </div>
              <div className="check-field">
                <label> Balcony</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Balcony"
                  name="Balcony"
                  onChange={handleChange}
                />
              </div>
              <div className="check-field">
                <label>Parking</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Parking"
                  name="Parking"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="submit-wrapper">
              <input type="submit" value="Add Property" onSubmit={handleSubmit}></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addpropertyform;
