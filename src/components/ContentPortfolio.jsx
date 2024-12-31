import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Fundacion lazos de amor",
    description:
      "Desarrollo de landing Page y manejo de redes sociales de una fundación.",
    technologies: ["React", "Javascript", "css"],
    image: "/portfolio1.png",
  },
  {
    title: "Biupoll",
    description:
      "Desarrollo de una landing page para empresa de investigación de mercado.",
    technologies: ["React", "Javascript", "css"],
    image: "/portfolio2.png",
  },
  {
    title: "Vivir Chevere",
    description:
      "Un software personalizado para la gestión y control de sedes, manejo de ventas y clientes en empresa de productos naturista.",
    technologies: ["React", "Node.js", "Sequelize CLI", "MySQL"],
    image: "/portfolio6.png",
  },
  {
    title: "NetBar",
    description: "Desarrollo de una landing page para empresa de internet.",
    technologies: ["React", "Javascript", "css"],
    image: "/portfolio3.png",
  },
  {
    title: "Julio Cesar",
    description: "Desarrollo de una landing page para terapeuta.",
    technologies: ["React", "Node.js", "Firebase"],
    image: "/portfolio4.png",
  },
  {
    title: "Torrelles dev",
    description: "Desarrollo de una landing page para Desarrollador.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    image: "/portfolio5.png",
  },
];

const ContentPortfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Nuestro Portafolio</h2>
      <p className="portfolio-description">
        Descubre algunos de los proyectos destacados que hemos realizado para
        nuestros clientes.
      </p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <ul className="technologies">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentPortfolio;
