import React from "react";
import "./Tenantdashboard.css";
import logo from "../../../images/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";
import SaveAsSharpIcon from "@mui/icons-material/SaveAsSharp";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function Tenantdashboard() {
  return (
    <div className="container">
      <div className="left-container">
        <div className="left-items">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <div className="dashboardicon">
              <DashboardIcon /> <a href="#profile">My Dashboard</a>
            </div>
            <div className="dashboardicon">
              <PaymentsSharpIcon /> <a href="#transactions">Payments</a>
            </div>
            <div className="dashboardicon">
              <SaveAsSharpIcon /> <a href="#complains">Complains</a>
            </div>
            <div className="dashboardicon">
              <LogoutRoundedIcon /> Logout
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-items" id="profile">
          <p className="TenantName">
            <i>Andrew Tate</i>
          </p>
          <h3 className="houseType">
            <i>Family House</i>
          </h3>
          <br />
          <hr />
          <div className="kyc1">
            <div>
              <p className="houseNumber">House Number</p>
            </div>
            <div>10</div>
          </div>
          <hr />
          <div className="kyc1">
            <div>
              <p className="houseNumber">Phone Number</p>
            </div>

            <div className="houseNumber">
              <p>254 </p>
              <div></div>
            </div>
            <hr />
            <div className="kyc1">
              <div className="houseNumber">
                <p>balance Due</p>
              </div>
              <div className="houseNumber">30,000</div>
            </div>
            <hr />
            <div className="kyc1">
              <div className="houseNumber">
                <p className="houseNumber">Date Due</p>
              </div>
              <div className="houseNumber">
                <input type="date" />
              </div>
            </div>
            <hr />
            <div className="buttons">
              <div className="paymentHistory">
                <a href="#transactions">
                  <button>Payment history</button>
                </a>
              </div>
              <div className="makepayment">
                <a href="#payments">
                  <button>Make Payment</button>
                </a>
              </div>
            </div>
            <hr />
            <hr />
            <h2 id="complains">Make Complains</h2>
            <div className="inputs" id="complains">
              <div className="nameInput">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="phone Number" />
              </div>
              <div className="houseNumberInput">
                <input type="text" placeholder="House Type" />
                <input type="text" placeholder="Unit Type" />
              </div>
              <div className="nameInput">
                <input type="text" placeholder="Location" />
                <input type="email" placeholder="Email " />
              </div>
            </div>
            <textarea name="complains" id="" cols="70" rows="10"></textarea>
            <div className="sendMessage">
              <button>Send Message</button>
            </div>
          </div>
          <hr />
          <hr />
          <br />
          <h2>Transactions</h2>
          <div className="transactions" id="transactions">
            <div>
              <h3>Amount Paid</h3>
            </div>
            <div>
              <h3>Date Paid</h3>
            </div>
          </div>
          <div className="kyc1">
            <div>Ksh 25,000</div>
            <div>11/12/30</div>
          </div>
          <hr />
          <div className="kyc1">
            <div>Ksh 35,000</div>
            <div>11/12/30</div>
          </div>
          <hr />
          <div className="kyc1">
            <div>Ksh 25,000</div>
            <div>11/12/30</div>
          </div>
          <hr />
          <div className="kyc1">
            <div>Ksh 35,000</div>
            <div>11/12/30</div>
          </div>
          <hr />
          <br />
          <br />
          <hr />
          <hr />
          <h3 id="payments">Make payments</h3>
          <i>
            please enter the phone number and the amount to be deducted from
            your Mpesa
          </i>
          <div className="inputs">
            <div className="nameInput">
              <input type="number" placeholder="0722 xxx 342" />
            </div>
            <div className="houseNumberInput">
              <input type="number" placeholder=" amount" />
            </div>
          </div>
          <div className="sendMessage">
            <button>Make Payment</button>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Tenantdashboard;
