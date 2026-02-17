import React from "react";

const Skills = () => {
  return (
    <section id="skills">
     <h2 className="gradient-title">Technical Skills</h2>

      <div className="skills-container">
        <div>
          <h3>Frontend</h3>
          <p>React, JavaScript, HTML, CSS</p>
        </div>

        <div>
          <h3>Backend</h3>
          <p>Node.js, Express</p>
        </div>

        <div>
          <h3>Databases</h3>
          <p>MongoDB, PostgreSQL</p>
        </div>

        <div>
          <h3>Data</h3>
          <p>Python, Pandas, SQL, Power BI</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
