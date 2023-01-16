import React from "react";
import AdminNavBar from "../adminhome/AdminNavbar";
import "./Addpropertyform.css";

function Addpropertyform() {
  return (
    <div>
      <AdminNavBar />
      <div className="form-wrapper">
        <form className="upload-form">
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
                />
              </div>
              <div className="check-field">
                <label> Shower</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Shower"
                  name="Shower"
                />
              </div>
              <div className="check-field">
                <label> Balcony</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Balcony"
                  name="Balcony"
                />
              </div>
              <div className="check-field">
                <label>Parking</label>
                <input
                  className="form-control"
                  type="checkbox"
                  id="Parking"
                  name="Parking"
                />
              </div>
            </div>

            <div className="submit-wrapper">
              <input type="submit" value="Add Property"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addpropertyform;
