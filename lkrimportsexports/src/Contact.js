import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center contact-us-heading mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="contact-form-label">Your Name *</label>
          <input type="text" className="form-control text-center" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label className="contact-form-label">Your E-Mail *</label>
          <input
            type="email"
            className="form-control text-center"
            name="email"
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
            className="form-control text-center"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="mb-3">
          <label className="contact-form-label">Message</label>
          <textarea
            className="form-control text-center"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center contact-us-section">
        <button type="submit" className="contact-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
