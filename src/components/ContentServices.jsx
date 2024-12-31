import React from "react";
import "../styles/Services.css";

const servicesData = [
  {
    title: "Manejo de redes sociales",
    description:
      "Creamos estrategias y contenido para optimizar tu presencia digital.",
    link: "#",
  },
  {
    title: "Creación de páginas web",
    description:
      "Diseñamos y desarrollamos sitios web a medida para tu negocio.",
    link: "#",
  },
  {
    title: "Creación de software de control",
    description:
      "Desarrollamos soluciones personalizadas para la gestión empresarial.",
    link: "#",
  },
];

const ContentServices = () => {
  return (
    <>
      {/* Transición entre About y Services */}
      <section className="about-services-transition">
        <h2 className="transition-title">Explora nuestros servicios</h2>
        <div className="decorative-line"></div>
      </section>

      {/* Sección de Servicios */}
      <section className="services">
        <div className="services-cards">
          {servicesData.map((service, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <a href={service.link} className="learn-more">
                Saber más →
              </a>
            </div>
          ))}
        </div>

        {/* Métricas destacadas */}
        <div className="services-stats">
          <div className="stat">
            <h3>100+</h3>
            <p>Proyectos completados</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Clientes satisfechos</p>
          </div>
          <div className="stat">
            <h3>99%</h3>
            <p>Reseñas positivas</p>
          </div>
          <div className="stat">
            <h3>10 años</h3>
            <p>De experiencia</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentServices;
