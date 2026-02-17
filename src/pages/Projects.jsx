import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>

      <ProjectCard
        title="Bookstore Full‑Stack App"
        description="Authentication, CRUD, reviews, favorites, responsive UI."
        tech="React, Node.js, Express, Prisma, PostgreSQL"
        links={[
          { label: "Frontend", url: "https://github.com/..." },
          { label: "Backend", url: "https://github.com/..." },
          { label: "Live Demo", url: "https://..." }
        ]}
      />

      <ProjectCard
        title="Java REST API"
        description="CRUD operations, modular architecture, validation."
        tech="Java, Spring Boot, MySQL"
        links={[
          { label: "GitHub Repo", url: "https://github.com/..." }
        ]}
      />

      <ProjectCard
        title="Front-End React"
        description="Components, routing, state management."
        tech="React, Vite, Auth, CRUD"
        links={[
          { label: "GitHub", url: "https://github.com/..." },
          { label: "Live Demo", url: "https://..." }
        ]}
      />

      <ProjectCard
        title="UX/UI Project- Mobile App"
        description="Wireframes, UI kit, prototype."
        tech="Figma"
        links={[
          { label: "Figma Prototype", url: "https://..." },
          { label: "GitHub Repo", url: "https://..." }
        ]}
      />
    </section>
  );
}
