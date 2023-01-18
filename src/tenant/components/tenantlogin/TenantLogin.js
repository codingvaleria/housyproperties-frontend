import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Tenantlogin.css";


const TenantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Added onLogin function
  const onLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // changed the API endpoint
    fetch("https://housy-properties-production.up.railway.app/tenants/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/mydashboard"); 
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      setIsLoading(false);
    });    
  };



  return (
    <div className="tenant-signin">
      <div className="tenant-signin-inner">
        <div className="sub-main">
          {/* FORM DIV*/}
          <form className="form-container" id="form" onSubmit={handleSubmit}>
            {/* LOGO DIV*/}
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo-img"></img>
            </div>
            {/* TITLE */}
            <h4 className="title">Tenant Login</h4>

            {/* FORM INPUTS */}
            <div className="inputs">
              {/* EMAIL */}
              <i class="bx bxs-envelope" id="icon-email"></i>
              <input
                type="text"
                id="i-email"
                name="email"
                placeholder="Email"
                value={email}
                className="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* PASSWORD */}
            <div className="inputs">
              <i class="bx bxs-lock" id="icon-password"></i>
              <input
                type="password"
                id="i-password"
                name="password"
                placeholder="Password"
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errors && errors.length > 0 && (
              <div className="input-control">
                <div style={{ color: "red" }}>
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              className="btn col-md-8 mx-auto text-center"
              type="submit"
              onClick = {handleSubmit}
            >
              Login
            </button>

            {/* FORGOT PASSWORD */}
            <div className="forgot-password">
              <p className="forgot">
                Forgot Password? <Link to="/forgotpassword">Click here</Link>
              </p>
            </div>
          </form>
        </div>
        {/* WELCOME TEXT*/}
        <h1 className="welcome">
          Welcome to Housy Properties,
          <br /> Home of Fine Living!
        </h1>
      </div>
    </div>
  );
};


export default TenantLogin;
