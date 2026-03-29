import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I'm <span className="highlight">Ximena Amalia Martin</span>
      </motion.h1>

      <motion.h2
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Full Stack Developer & Data Analyst
      </motion.h2>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        I build modern, user‑focused applications and data‑driven solutions using
        technologies like React, Node.js, Python and Power BI.
        My work blends clean design, solid engineering and analytical thinking.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a
          href="https://github.com/xim3namartin"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;

