import React, { useState } from "react";
import "./Adminsignup.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png";


function AdminSignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/adminsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate(`/adminlogin`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="main-a">
      <div className="formfield-a">
        <form id="form" onSubmit={handleSubmit}>
          <div className="logo">
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo-img"></img>
            </div>
          </div>

          <div className="title">
            <h1>Admin Sign-Up</h1>
          </div>

          <div>
          <i /*class="fa fa-user" aria-hidden="true"*/></i>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              value={username}
              className="user"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="second-input-a">
            <img /*src={envelope_icon} alt="email" className="icon"*/ />

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              className="user"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="second-inpu-b">
            <img /*src={address_icon} alt="address" className="icon" *//>

            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              className="user"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="second-input-c">
            <img /* src={key_icon} alt="key" className="icon" *//>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              className="user"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="second-input-d">
          <i /*class="fa fa-user" aria-hidden="true"*/></i>

            <input
              type="password"
              id="password-c"
              name="confirm-password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              className="user"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          {errors.length > 0 && (
            <div className="input-control">
              <div style={{ color: "red" }}>
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            </div>
          )}

          <div className="login-a">
            <button onSubmit={handleSubmit} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AdminSignUp;