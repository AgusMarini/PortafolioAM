import React from "react";

const About = () => {
  return (
    <section id="about">
  <h2>Sobre mí</h2>
  <p>
  Cursando la Tecnicatura en Programación  en La Universidad Tecnológica Nacional. Experiencia en lenguajes:  Java, C, HTML, CSS, React y JavaScript. Mi principal interés se concentra  en el desarrollo front-end, buscando  constantemente aprender nuevas tecnologías.
  </p>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <a
      href="/CV.pdf" // Ruta del archivo PDF en la carpeta public
      target="_blank" // Abre el archivo en una nueva pestaña
      rel="noopener noreferrer" // Buena práctica para enlaces externos
      id="btn-cv"
      style={{
        padding: "10px 20px",
        color: "white",
        backgroundColor: "#f04ab8",
        textDecoration: "none",
        borderRadius: "5px",
      }}
    >
      Ver CV
    </a>
  </div>
</section>

  );
};

export default About;
