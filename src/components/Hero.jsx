import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">

   <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
    >
  Hi, I'm Ximena Martin
    </motion.h1>
      <h2>Full Stack Developer & Data Analyst</h2>

      <p>
        I build scalable web applications and data-driven solutions.
        Open to opportunities in Dublin, Ireland.
      </p>

      <div className="hero-buttons">
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
      </div>
    </section>
  );
};

export default Hero;
