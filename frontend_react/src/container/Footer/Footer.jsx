import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    // Set form data of every single input field
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);

    //Get the data from the form with specified input
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    // Push the data to the sanity(Database) --> Contact schema
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a className="p-text" href="mailto:ibraheemsani035@gmail.com">
            hello@ibrahim.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a className="p-text" href="tel: +234 (812) 256-881">
            +234 (812) 256-881
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>
          <div className="p-text">
            <textarea
              className="p-text"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch with me!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg",
);
