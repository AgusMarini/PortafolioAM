import React from "react";
import "./Projects.css";
import catona from "./catona.png";
import alura from "./alura.png"
import TravelClick from "./TRavelClick.png"
const Projects = () => {
  const projects = [
    {
      title: "Pagina Muzarella Catona",
      description: "Pagina web para finalizacion del curso de full stuck de codo a codo en grupo",
      image: catona, // Imagen personalizada
      link: "https://grupo-b17-chasmannjoel.vercel.app/", // Enlace al proyecto
      code: "#", // Enlace al código
    },
    {
      title: "Sistema de venta productos",
      description: "Proyecto que hice como practica en Oracle/One Next Education",
      image: alura, // Imagen genérica de ejemplo
      link: "https://agusmarini.github.io/AluraGeek-CRUD/", // Enlace al proyecto
      code: "https://github.com/AgusMarini/AluraGeek-CRUD.git", // Enlace al código
    },
    {
      title: "TravelClick",
      description: "Invente y diseñe esta app en figma para mi proyecto de finalizacion del curso de Diseño UX/UI",
      image: TravelClick, // Imagen personalizada
      link: "https://www.figma.com/proto/2TyziNkVvM0mtQRsQgxI4Z/Travelclick%2Fcorregido?node-id=194-206&starting-point-node-id=194%3A199", // Enlace al proyecto
      code: "https://www.figma.com/design/jlHcJ5VJWt3qSTZY70TtvB?fuid=1279433052732912648&prev-plan-id=1279433054884902412&prev-plan-type=team&prev-selected-view=recentsAndSharing", // Enlace al código
    },
    {
      title: "AgendaOdontologica",
      description: "Cree una agenda para un dentista, donde permite la autenticacion de usuarios, la gestion de turnos y el manejo de disponibilidad de dentistas,",
      image: TravelClick, // Imagen personalizada
      link: "https://consultorioodontologico-binetti.onrender.com/", // Enlace al proyecto
      code: "https://github.com/AgusMarini/AgendaDentista", // Enlace al código
    },

  ];

  return (
    <section id="projects">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="flip-left"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a className="project-button" href={project.link}>
                Ver proyecto
              </a>
              <a className="project-button" href={project.code}>
                Ver código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
