import React from "react";
import "../styles/About.css";

const ContentAbout = () => {
  return (
    <section className="about-diagonal">
      <div className="about-diagonal-wrapper">
        <div className="about-diagonal-text">
          <h2 className="about-diagonal-title">
            ¿Por qué elegir <span>Nuestra Agencia?</span>
          </h2>
          <p className="about-diagonal-description">
            Nos destacamos por ofrecer soluciones innovadoras y personalizadas
            para cada cliente. Con experiencia en marketing digital, redes
            sociales y estrategias creativas, impulsamos tu marca al siguiente
            nivel.
          </p>
        </div>
        <div className="about-diagonal-image">
          <img src="home1.jpg" alt="Equipo creativo" />
        </div>
      </div>
      <div className="diagonal-divider"></div>
    </section>
  );
};

export default ContentAbout;
