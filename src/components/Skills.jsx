import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import { SiJavascript, SiExpress, SiPostgresql, SiMongodb, SiPandas} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";



const Skills = () => {
  return (
    <section id="skills">
      <h2 className="gradient-title">Technical Skills</h2>

      <div className="skills-container">
        <div className="frontend-card">
          <h3>Frontend</h3>
          <p>
            <span><FaReact /> React</span>
            <span><SiJavascript /> JavaScript</span>
            <span><AiFillHtml5/>HTML</span>
            <span><FaCss3Alt/>CSS</span>
          </p>

        </div>

        <div>
          <h3>Backend</h3>
          <p>
            <span><FaNodeJs />Node.js</span>
            <span><SiExpress /> Express</span>
            <span><FaJava /> Java</span>
          </p>

        </div>

        <div>
          <h3>Databases</h3>
          <p>
            <span><SiMongodb />MongoDB</span>
            <span><SiPostgresql />PostgreSQL</span>
          </p>

        </div>

        <div>
          <h3>Data Analysis</h3>
          <p>
            <span><FaPython />Python</span>
            <span><SiPandas />Pandas</span>
            <span><FaDatabase />SQL</span>
            <span><FaChartBar/>Power BI</span>
          </p>

        </div>
      </div>
    </section>
  );
};

export default Skills;
