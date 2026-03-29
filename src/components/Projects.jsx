import React from "react";
import { projects } from "../Data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="gradient-title">Selected Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>

          <p className="project-description">{project.problem}</p>
          <p className="project-description">{project.solution}</p>


          <div className="stack">
            {project.stack.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>

            <p className="project-highlight">
              {project.highlight}
            </p>

          <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub ↗
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-btn demo-btn"
                >
                Live Demo ↗
                </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
