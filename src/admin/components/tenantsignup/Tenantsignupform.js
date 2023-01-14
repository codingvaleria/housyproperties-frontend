import React from "react";
import "./Tenantsignupform.css";
import AdminNavBar from "../adminhome/AdminNavbar";

export default function Tenantsignup() {
  return (
    <div className="form-wrapper">
      <AdminNavBar />
      <form className="upload-form">
        <div className="title">Tenant Sign up Form </div>
        <div className="tenant-form">
          <div className="input-field">
            <i class="icon fa fa-user" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              id="First Name"
              name="First Name"
            />
          </div>
          <div className="input-field">
            <i class="icon fa fa-user" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              id="Last Name"
              name="Last Name"
            />
          </div>
          <div className="input-field">
            <i class="icon fa fa-phone" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              placeholder="Phone No"
              id="Phone No"
              name="Phone No"
            />
          </div>
          <div className="input-field">
            <i class="icon fa fa-envelope" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              placeholder="Email Address"
              id="Email Address"
              name="Email Address"
            />
          </div>
          <div className="input-field">
            <i class="icon fa fa-key" aria-hidden="true"></i>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              id="Password"
              name="Password"
            />
          </div>
          <div className="input-field">
            <i class="icon fa fa-home" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              placeholder="House No."
              id="House No."
              name="House No."
            />
          </div>
          <div className="input-field">
            <div className="custom-select">
              <i class="icon fa fa-home" aria-hidden="true"></i>
              <select>
                <option value="">House Type</option>
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
            <i class="icon fa fa-money" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              placeholder="Rent payable"
              id="Rent payable"
              name="Rent payable"
            />
          </div>
          <div className="submit-wrapper">
            <input type="submit" value="Add Tenant"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
