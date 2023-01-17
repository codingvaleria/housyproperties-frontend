import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const nav = useNavigate();
  return (
    <div class="footer-section">
      <div class="footer-container">
        <div class="row">
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li> Call +254123456</li>
              <li> Email:rentwithus@gmail.com</li>
              <li> Twitter:@rentwithus</li>
              <li> Instagram:#rentwithus</li>
              <li> Facebook:rentwithus</li>
            </ul>
          </div>
          <div class="footer-col">
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
              <a href="">
                <li> Property Types</li>
              </a>
              <a href="">
                <li> Become a Tenant</li>
              </a>
              <a href="">
                <li> Contact Us</li>
              </a>
              <a href="">
                <li> Back To Top</li>
              </a>
            </ul>
          </div>
          <div class="footer-col">
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
              <a href="">
                <li> Our Properties</li>
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
