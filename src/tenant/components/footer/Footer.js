import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const nav = useNavigate();
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li> Call +254123456</li>
              <li> Email:rentwithus@gmail.com</li>
              <li> Twitter:@rentwithus</li>
              <li> Instagram:#rentwithus</li>
              <li> Facebook:rentwithus</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <a href="">
                <li
                  onClick={() => {
                    nav("/");
                  }}
                >
                  Home
                </li>
              </a>
              <a href="#property_type">
                <li
                  onClick={() => {
                    nav("/");
                  }}
                >
                  {" "}
                  Property Types
                </li>
              </a>
              <a href="#properties">
                <li
                  onClick={() => {
                    nav("/");
                  }}
                >
                  {" "}
                  Become a Tenant
                </li>
              </a>
              <a href="#contact">
                <li
                  onClick={() => {
                    nav("/about");
                  }}
                >
                  {" "}
                  Contact Us
                </li>
              </a>
              <a href="">
                <li> Back To Top</li>
              </a>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <a href="">
                <li
                  onClick={() => {
                    nav("/");
                  }}
                >
                  {" "}
                  Home
                </li>
              </a>
              <a href="">
                <li
                  onClick={() => {
                    nav("/about");
                  }}
                >
                  About Us
                </li>
              </a>
              <a href="#properties">
                <li
                  onClick={() => {
                    nav("/");
                  }}
                >
                  {" "}
                  Our Properties
                </li>
              </a>
              <a href="">
                <li
                  onClick={() => {
                    nav("/signin");
                  }}
                >
                  Sign in
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
