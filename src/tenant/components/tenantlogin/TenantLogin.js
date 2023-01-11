import React from "react";

const TenantLogin = ({ onLogin }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => { 
      e.preventDefault();
      setIsLoading(true);
      fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email,
              password,
          }).then((r) => {
              if (r.ok) {
                  r.json().then((user) => onLogin(user));
              } else {
                  r.json().then((err) => setErrors(err.errors));
              }
          }
          ),
      });
  };

  return (
    <div className="body">
         {/* WELCOME TEXT*/}
          <h1 className="welcome">
            Welcome to Housy Properties,<br/> home of fine living!
          </h1>

          <div className="sub-main d-flex col-sm-4 mt-5 ms-5">
            {/* FORM DIV*/}
              <form className='form-container' id="form" onSubmit={handleSubmit}>
                 {/* LOGO DIV*/}
                <div className="logo-container">
                  <img src={logo} alt="logo" className="logo-img"></img>
                </div>
                {/* TITLE */}
                <div >
                  <h3 className="title">Tenant Login</h3>
                </div>
                {/* FORM INPUTS */}
                <div className="inputs">
                   {/* EMAIL */}
                   <i class='bx bxs-envelope' id='icon-email'></i>
                    <input 
                      type="text" id="email" name="email" 
                      placeholder="Email" value={email} className="email"
                    />
                </div>
                  {/* PASSWORD */}
                <div className="inputs">
                  <i class='bx bxs-lock' id='icon-password'></i>
                  <input
                  type="password" id="password" name="password"
                  placeholder="Password" value={password} className="password"
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


export default TenantLogin;
