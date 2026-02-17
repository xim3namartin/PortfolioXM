import { FaReact, FaNodeJs, FaFigma, FaJava, FaChartBar, FaLeaf, FaExchangeAlt } from "react-icons/fa";
import { SiPostgresql, SiExpress, SiPython } from "react-icons/si";

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card"><FaReact className="skill-icon" /><span>React</span></div>
        <div className="skill-card"><FaNodeJs className="skill-icon" /><span>Node.js</span></div>
        <div className="skill-card"><SiExpress className="skill-icon" /><span>Express</span></div>
        <div className="skill-card"><SiPostgresql className="skill-icon" /><span>PostgreSQL</span></div>
        <div className="skill-card"><FaJava className="skill-icon" /><span>Java</span></div>
        <div className="skill-card"><FaLeaf className="skill-icon" /><span>Spring Boot</span></div>
        <div className="skill-card"><FaExchangeAlt className="skill-icon" /><span>REST APIs</span></div>
        <div className="skill-card"><FaFigma className="skill-icon" /><span>Figma</span></div>
        <div className="skill-card"><SiPython className="skill-icon" /><span>Python</span></div>
        <div className="skill-card"><FaChartBar className="skill-icon" /><span>Power BI</span></div>
      </div>
    </section>
  );
}

