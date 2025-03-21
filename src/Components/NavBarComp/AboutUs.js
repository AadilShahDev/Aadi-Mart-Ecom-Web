// src/pages/AboutUs.js
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>

      <section className="about-us-content">
        <div className="company-info">
          <h2>Who We Are</h2>
          <p>
            We are a dynamic team of professionals committed to delivering
            exceptional services to our customers. Our goal is to provide
            innovative solutions to everyday challenges, ensuring a seamless
            experience for everyone.
          </p>
        </div>

        <div className="team-info">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="team-member-image"
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="team-member-image"
            />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="team-member-image"
            />
            <h3>Alex Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create long-lasting relationships with our customers
          by providing top-notch services, listening to their needs, and
          delivering results that exceed expectations.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
