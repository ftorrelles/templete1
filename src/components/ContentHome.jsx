import React from "react";
import "../styles/ContentHome.css";

const ContentHome = () => {
  return (
    <section className="home">
      <div className="content-wrapper">
        <div className="image-content">
          <img src="/home 4.jpg" alt="Creative Design" />
        </div>
        <div className="text-content">
          <h1 className="title">
            Crea <span>con nosotros</span>
          </h1>
          <p className="description">
            Transformamos tus ideas en realidad. Nuestro equipo creativo está
            listo para llevar tu proyecto al siguiente nivel con soluciones
            innovadoras y personalizadas.
          </p>
          <div className="buttons">
            <button className="btn primary">Contáctanos</button>
            <button className="btn secondary">Tarjeta de presentación</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHome;
