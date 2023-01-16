import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Tenantdashboard.css";
import logo from "../../../images/logo.png";


function Tenantdashboard() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [houseType, setHouseType] = useState("");
  const [unitType, setUnitType] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const navigateToSignIn = () =>{
    navigate("/signin")
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phoneNo: phoneNo,
        houseType: houseType,
        unitType: unitType,
        location: location,
        message: message,
      }),
    })
    .then(r=>{
      if(r.ok){
        navigate('/home')
      }
    })
  
  }


  return (
    <div className="tenant-main">
      <div className="tenant-container">
        <div className="left-container">
          <div className="left-items">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="menu">
              <div className="dashboardicon">
                <i class="fa fa-list" aria-hidden="true"></i>
                <a href="#profile">My Dashboard</a>
              </div>
              <div className="dashboardicon">
                <i class="fa fa-money" aria-hidden="true"></i>
                <a href="#transactions">Payments</a>
              </div>
              <div className="dashboardicon">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                <a href="#complains">Complains</a>
              </div>

              <div onClick={navigateToSignIn} className="dashboardicon">
                <i  class="fa fa-sign-out" aria-hidden="true" ></i>Logout
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
              <div className="houseNumber">10</div>
            </div>
            <hr />
            <div className="kyc1">
              <div className="houseNumber">
                <p>Phone Number</p>
              </div>
              <div className="houseNumber">254</div>
            </div>
            <hr />
            <div className="kyc1">
              <div className="houseNumber">
                <p>Balance Due</p>
              </div>
              <div className="houseNumber">30,000</div>
            </div>
            <hr />
            <div className="kyc1">
              <p className="houseNumber-d">Date Due</p>
              <div className="houseNumber-d">
                <input type="date" />
              </div>
            </div>
            <hr />
            <br />
            <div className="buttons">
              <div className="paymentHistory">
                <a href="#transactions">
                  <button className="t-button">Payment history</button>
                </a>
              </div>
              <div className="makepayment">
                <a href="#payments">
                  <button className="t-button">Make Payment</button>
                </a>
              </div>
            </div>
            <hr />
            <hr />
            <h2 id="complains">Make Complains</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputs" id="complains">
                <div className="nameInput">
                  <input 
                  className="t-input" 
                  type="text" 
                  placeholder="Name" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
                
                  <input
                    className="t-input"
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}
                  />
                </div>
                    <div className="houseNumberInput">
                      <input
                     
                        className="t-input"
                        type="text"
                        placeholder="House Type"
                        value={houseType}
                        onChange={(e)=>setHouseType(e.target.value)}
                      />
                      <input
                        className="t-input"
                        type="text"
                        placeholder="Unit Type"
                        value={unitType}
                        onChange={(e)=>setUnitType(e.target.value)}
                      /> 
                      </div>
                  <div className="nameInput">
                    <input 
                    className="t-input" 
                    type="text" 
                    placeholder="Location" 
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}/>
                  </div>
                </div>
                   <textarea 
                   name="complains" id="" 
                   cols="70" rows="10"
                   value={message}
                   onChange={(e)=>setMessage(e.target.value)}
                 >
                  
                 </textarea>
                <div className="sendMessage">
      
                   <button className="t-button">Send Message</button>
            
                </div>
            </form>
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
            Please enter the phone number and the amount to be deducted from
            your Mpesa
          </i>
          <div className="inputs">
            <div className="nameInput">
              <input
                className="t-input"
                type="text"
                placeholder="0722 XXX 342"
              />
            </div>
            <div className="houseNumberInput">
              <input className="t-input" type="number" placeholder=" amount" />
            </div>
          </div>
          <div className="sendMessage">
            <button className="t-button">Make Payment</button>
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
