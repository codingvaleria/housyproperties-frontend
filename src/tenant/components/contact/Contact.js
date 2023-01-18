import React from "react";
import "./Contact.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://housy-properties-production.up.railway.app/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: Name,
        Email: Email,
        phone: phone,
        message: message,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate("/");
      }
    });
  }
  return (
    <div className="overlay" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form" id="form_card">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone No:"
            minLength={10}
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div id="textarea_part">
          <textarea
            placeholder="
          Type Message"
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button id="btn">Send Message</button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
