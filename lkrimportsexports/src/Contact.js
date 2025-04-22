import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hw6lzi",     // replace with your EmailJS service ID
        "template_ofy1qmr",    // replace with your EmailJS template ID
        form.current,
        "rjpYlBKZsZI3aCnkB"      // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", mobile: "", message: "" });
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center contact-us-heading mb-4">Contact Us</h2>
      <form ref={form} onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="contact-form-label">Your Name *</label>
          <input
            type="text"
            name="name"
            className="form-control text-center"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="contact-form-label">Your E-Mail *</label>
          <input
            type="email"
            name="user_email"
            className="form-control text-center"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your E-Mail"
            required
          />
        </div>
        <div className="mb-3">
          <label className="contact-form-label">Mobile Number *</label>
          <input
            type="tel"
            name="phone"
            className="form-control text-center"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="mb-3">
          <label className="contact-form-label">Message</label>
          <textarea
            name="message"
            className="form-control text-center"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center contact-us-section">
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
