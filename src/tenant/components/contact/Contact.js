import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <>
    <div id="overlay">
                      <h2>Contact Us</h2>
                <form id="form_card"> 
                    
                    <div>
                            <input type="text" 
                            placeholder="Your Name"
                            id="name"
                            />
                            <input type="text" 
                            placeholder="Your Email"
                            id="email"
                            />
                            <input type="Number" 
                            placeholder="Phone No:"   
                            minLength={10}
                            id="phone"
                            />
                    </div>
                    <div id="textarea_part">
                            <textarea  
                            placeholder="  Type Message"  
                            type="text" 
                            id="message" />
                            <button id="btn">Send Message</button>
                   </div>
                    
                </form>
            </div>
          </>
  );
}

export default Contact;
