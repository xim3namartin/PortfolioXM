import React from "react";
import { projects } from "../Data/Projects";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="gradient-title">Featured Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>

          <p><strong>Problem:</strong> {project.problem}</p>
          <p><strong>Solution:</strong> {project.solution}</p>

          <div className="stack">
            {project.stack.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
