import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Let’s Build Something Meaningful</h2>

        <p className="contact-text">
          I’m currently open to new opportunities, collaborations and exciting
          projects where I can contribute, grow and create impact.
          <br /><br />
          If you have an idea, a role, or just want to connect — I’d love to hear from you.
        </p>

        <div className="contact-grid">
          <a href="mailto:ximenamartin33@gmail.com" className="contact-card">
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/ximenamartin33"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/xim3namartin"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <div className="contact-card location">
            <FaMapMarkerAlt />
            <span>Dublin, Ireland</span>
          </div>
        </div>

        <div className="contact-cta">
          <a href="mailto:ximenamartin33@gmail.com" className="primary-btn">
            Let’s Talk
          </a>

          <a href="/CV_Ximena_Martin.pdf" download className="secondary-btn">
            <FaDownload /> Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

