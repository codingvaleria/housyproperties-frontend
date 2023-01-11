import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="navbar">
      <span className="nav-logo">
        <img src={logo} alt="logo" />
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
        <NavLink to="/sign-in">Sign in</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
