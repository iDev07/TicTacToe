import React, { useState, useEffect } from "react";
import AOS from "aos";
import "./Contact.css";
import contactImg from "../img/me_footer.png";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2" data-aos="fade-right">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+998 90 806 20 04</strong> or email{" "}
                <strong>idevdiyor@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />

              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2" data-aos="fade-left">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
