export default function ProjectCard({ title, description, tech, links }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech">{tech}</p>

      <div className="links">
        {links.map((link, i) => (
          <a key={i} href={link.url} target="_blank">{link.label}</a>
        ))}
      </div>
    </div>
  );
}
