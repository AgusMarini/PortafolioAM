import React from "react";
import "./Projects.css";

import catona from "./catona.png";
import alura from "./alura.png";
import serviFacil from "./servifacil.png";
import travelClick from "./travelclick.png";

import inicioSesionAgendaDentista from "./inicioSesionAgendaDentista.png";
import bellaVista from "./bellavista.png";
import stoneControl from "./stonecontrol.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce + Panel Administrativo – BellaVista Pinturerías",
      description:
        "Tienda online desarrollada de punta a punta (freelance) para una pinturería local: catálogo con filtros y búsqueda, carrito con checkout (envío o retiro en local), stock en tiempo real, emails automáticos de confirmación y panel de administración con alertas de stock bajo. Plataforma propia, sin comisiones por venta.",
      image: bellaVista,
      tags: ["Next.js", "React", "TypeScript", "Node.js", "Prisma"],
      featured: true,
      link: "#", // TODO: URL pública del sitio
      code: "#",
    },
    {
      title: "Plataforma de Gestión y Catálogo – Stone Control",
      description:
        "Plataforma web fullstack (freelance) para una distribuidora de piedra y mármol: catálogo premium organizado por tipo y marca con rutas dinámicas, fotos, videos y carrusel 3D interactivo; panel de administración con CRUD completo y carga de imágenes y videos por producto; autenticación JWT y diseño responsive con mega-menú.",
      image: stoneControl,
      tags: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
      featured: true,
      link: "#", // TODO: URL pública del sitio
      code: "#", // TODO: repo stone-control-frontend cuando esté en GitHub
    },
    {
      title: "ServiFácil – Plataforma de Servicios",
      description:
        "Aplicación web desarrollada como proyecto final de la tecnicatura, orientada a la gestión y contratación de servicios. Frontend en Angular y API REST con Java + Spring Boot, con autenticación de usuarios, gestión de turnos, perfiles, chat en tiempo real y administración de visitas.",
      image: serviFacil,
      tags: ["Angular", "Java", "Spring Boot", "Scrum"],
      link: "#",
      code: "https://github.com/lopezenzoa/domestic-services-web/tree/develop",
    },
    {
      title: "Agenda Odontológica",
      description:
        "Aplicación web para la gestión de turnos odontológicos con autenticación de usuarios y manejo de disponibilidad en tiempo real, desarrollada con Python/Flask y SQLAlchemy para un consultorio real.",
      image: inicioSesionAgendaDentista,
      tags: ["Python", "Flask", "SQLAlchemy"],
      link: "https://consultorioodontologico-binetti.onrender.com/",
      code: "https://github.com/AgusMarini/AgendaDentista",
    },
    {
      title: "Sistema de venta de productos",
      description:
        "Proyecto desarrollado como práctica en el programa Oracle / ONE Next Education.",
      image: alura,
      tags: ["JavaScript", "CRUD"],
      link: "https://agusmarini.github.io/AluraGeek-CRUD/",
      code: "https://github.com/AgusMarini/AluraGeek-CRUD",
    },
    {
      title: "Página Muzarella Catona",
      description:
        "Página web desarrollada en grupo como trabajo final del curso Full Stack de Codo a Codo.",
      image: catona,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://grupo-b17-chasmannjoel.vercel.app/",
      code: "#",
    },
    {
      title: "TravelClick",
      description:
        "Diseño de aplicación realizado en Figma como proyecto final del curso de Diseño UX/UI.",
      image: travelClick,
      tags: ["Figma", "UX/UI"],
      link: "https://www.figma.com/proto/2TyziNkVvM0mtQRsQgxI4Z/Travelclick",
      code: "https://www.figma.com/design/jlHcJ5VJWt3qSTZY70TtvB",
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const renderLinks = (project) => (
    <div className="project-links">
      {project.link !== "#" && (
        <a
          className="btn btn-primary"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      )}

      {project.code !== "#" && (
        <a
          className="btn btn-secondary"
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código
        </a>
      )}
    </div>
  );

  const renderTags = (project) => (
    <ul className="project-tags">
      {project.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );

  return (
    <section id="projects">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2 className="section-title">Proyectos</h2>
      </div>

      {/* Proyectos destacados: clientes reales, en producción */}
      <div className="featured-container">
        {featured.map((project) => (
          <article
            className="featured-card"
            key={project.title}
            data-aos="fade-up"
          >
            <div className="featured-media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="featured-body">
              <span className="featured-label">Cliente real · Freelance</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {renderTags(project)}
              {renderLinks(project)}
            </div>
          </article>
        ))}
      </div>

      {/* Proyectos académicos y de cursos */}
      <div className="projects-container">
        {rest.map((project) => (
          <article className="project-card" key={project.title} data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {renderTags(project)}
              {renderLinks(project)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
