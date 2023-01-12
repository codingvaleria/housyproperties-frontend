import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Adminlogin.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

function Adminlogin(onLogin) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate(`/admin/viewtenants`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="main">
      <div className="formfield">
        <form id="form" onSubmit={handleSubmit}>
          <div className="logo">
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo-img"></img>
            </div>
          </div>
          <div className="title-a">
            <h1>Admin Login</h1>
          </div>
          <div className="input-field">
            <i class="ico fa fa-user" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              value={username}
              placeholder="Username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <i class="ico fa fa-key" aria-hidden="true"></i>
            <input
              className="form-control"
              type="password"
              value={password}
              placeholder="Password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="login">
            <button onSubmit={handleSubmit} type="submit">
              Login
            </button>
          </div>

          <div className="input-control">
            <p className="p">
              Forgot Password? <Link to="/forgotpassword">Click here</Link>
            </p>
            <div>or</div>
            <p className="p">
              Don't have an account?
              <Link to="/admin/signup"> Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
