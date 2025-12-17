import React from "react";
import { MdEmail, MdPhone , MdLinkedIn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Deep Patel</h3>
          <p>Flutter Developer</p>
        </div>

        {/* Center Text */}
        <div className="footer-center">
          <p>
            Crafting smooth, scalable, and user-friendly mobile applications
            using Flutter.
          </p>
        </div>

        {/* Contact Icons */}
        <div className="footer-links">
          <a
            href="mailto:deeppatel8176@gmail.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="tel:+919824908176"
            aria-label="Phone"
          >
            <MdPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/deep-patel-64a166369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            aria-label="Linkedin"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Built by Dishank Patel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
