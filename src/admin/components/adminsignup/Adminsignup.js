import React, { useState } from "react";
import "./Adminsignup.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png";
function Adminsignup(/*onLogin*/) {
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
    fetch("https://housy-properties-production.up.railway.app/admins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => /*onLogin*/(user));
        navigate(`/admin/login`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="admin-signup-main-a">
      <div className="admin-sign-up-submain-a">
        <form id="s-form" onSubmit={handleSubmit}>
          <div className="admin-signup-logo-a">
            <div className="admin-signup-logo-container">
              <img src={logo} alt="logo" className="admin-signup-logo-img"></img>
            </div>
          </div>
          <div className="title-aa">
            <h1>Admin Sign-Up</h1>
          </div>
          <div className="input-e">
            <i className="ico fa fa-user" aria-hidden="true"></i>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              value={username}
              className="form-c"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-e">
            <i className="ico fa fa-envelope" aria-hidden="true"></i>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              className="form-c"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-e">
            <i className="ico fa fa-address-book" aria-hidden="true"></i>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              className="form-c"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input-e">
            <i className="ico fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              className="form-c"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-e">
            <i className="ico fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              id="password-c"
              name="confirm-password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              className="form-c"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          {errors.length > 0 && (
            <div className="input-d">
              <div style={{ color: "red" }}>
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            </div>
          )}
          <div className="signup">
            <button className="s-button" onSubmit={handleSubmit} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Adminsignup;
