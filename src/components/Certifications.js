import React from "react";
import "./Certifications.css";
import certificadoFullStack from "./cer.png"; // Ruta correcta para tu imagen
import certificadoDisenio from "./dis.png";
import certificadoPython from "./cer1.png";
import certificadoFront from "./alura2.png"; // Una sola imagen para Front-End

const Certifications = () => {
  const certifications = [
    {
      title: "Curso Full Stack en Javascript",
      image: certificadoFullStack, // Imagen del certificado
    },
    {
      title: "Curso Diseño UX/UI",
      image: certificadoDisenio,
    },
    {
      title: "Curso Full Stack - Python",
      image: certificadoPython,
    },
    {
      title: "Curso Front-End",
      image: certificadoFront, // Una sola imagen
      link: "https://app.aluracursos.com/user/agustina-1312/fullCertificate/e8c0b1f9bd8746f79963dc291e96ae0a",
    },
  ];

  return (
    <section id="certifications">
      <h2 className="section-title">Certificaciones</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index} id={`cert-card-${index}`}>
            {/* Mostrar la imagen si existe */}
            {cert.image && (
              <img
                src={cert.image}
                alt={`Certificado ${cert.title}`}
                className="cert-image"
              />
            )}

            <h3>{cert.title}</h3>

            {/* Mostrar el enlace si existe */}
            {cert.link && (
              <a
                className="cert-button"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver certificado
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
