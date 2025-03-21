// src/components/ContactUs.js
import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send this form data to a backend here.
    console.log("Form Submitted", formData);
    alert("Your message has been submitted!");
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <ul>
          <li>
            <strong>Email:</strong> support@example.com
          </li>
          <li>
            <strong>Phone:</strong> +1 (555) 123-4567
          </li>
          <li>
            <strong>Address:</strong> 1234 Main Street, Cityville, ST 12345
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Enter your message"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
