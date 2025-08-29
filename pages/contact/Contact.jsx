import React, { useState } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false); // hide the custom alert
  };

  return (
    <div className="contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=Dehradun,+Uttarakhand&output=embed"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form className="form">
        <h1>Talk to Us</h1>
        <p>📍 Dehradun Uttarakhand</p>
        <p>📞 Call Now: 7895215579</p>
        <p className="last">📧 thepsychologylady@gmail.com</p>
        <div className="inputcont cursor-hover">
          <GoPerson color="#5d3136" />
          <input className="cursor-hover" name="name" type="text" placeholder="Name" />
        </div>
        <div className="inputcont cursor-hover">
          <MdOutlineMailOutline color="#5d3136" />
          <input className="cursor-hover" type="email" placeholder="E-mail" />
        </div>
        <div className="inputcont cursor-hover">
          <RiPagesLine color="#5d3136" />
          <input className="cursor-hover" name="subject" type="text" placeholder="Subject" />
        </div>
        <textarea
          className="cursor-hover"
          placeholder="Your Message (optional)"
          id="textarea"
        ></textarea>
        <button className="contact-btn cursor-hover" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-box">
            <p>Message Sent! Thank You Very Much!</p>
            <div className="alert-sticker">💌</div>
            <button className="alert-btn" onClick={closeAlert}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
