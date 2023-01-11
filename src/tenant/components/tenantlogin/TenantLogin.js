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

 

export default TenantLogin;
