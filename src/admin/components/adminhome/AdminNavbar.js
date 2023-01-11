import React, { useState } from "react";
import "./AdminNavbar.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function AdminNavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="admin-navbar">
      <span className="nav-logo">
        <img src={logo}></img>
      </span>
      <button className="hamburger-menu" onClick={handleShowNavbar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="open-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <div className={showNavbar ? "nav-items" : "nav-items hidden"}>
        <NavLink to="/admin/">Home</NavLink>
        <NavLink to="/admin/addproperty">Add Property</NavLink>
        <NavLink to="/admin/tenantsignup">Add Tenant</NavLink>
        <NavLink to="/admin/login">Logout</NavLink>
      </div>
    </div>
  );
}
