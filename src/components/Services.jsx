import React, { useState } from "react";
import "./Services.css";

import bellaVista from "./bellavista.png";
import stoneControl from "./stonecontrol.png";
import serviFacil from "./servifacil.png";
import agenda from "./inicioSesionAgendaDentista.png";

const services = [
  {
    title: "E-commerce a medida",
    body:
      "Tiendas online propias, sin comisiones por venta: catálogo con filtros, carrito con checkout, stock en tiempo real y panel de administración para que el negocio se gestione solo.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    image: bellaVista,
  },
  {
    title: "Catálogos y plataformas de gestión",
    body:
      "Catálogos premium con contenido multimedia y backoffice completo: CRUD, carga de imágenes y videos, autenticación segura y control total de las publicaciones sin depender de terceros.",
    tags: ["Angular", "Spring Boot", "PostgreSQL"],
    image: stoneControl,
  },
  {
    title: "Aplicaciones web full stack",
    body:
      "De la idea a producción: relevamiento, modelado de datos, API, frontend y deploy. Interfaces pensadas para usuarios no técnicos, con roles diferenciados y flujos claros.",
    tags: ["React", "Node.js", "Java"],
    image: serviFacil,
  },
  {
    title: "Turnos y automatización de procesos",
    body:
      "Sistemas que reemplazan planillas y registros manuales: turnos con validación de disponibilidad en tiempo real, reportes automáticos y alertas que ahorran horas de trabajo operativo.",
    tags: ["Python", "Flask", "SQL"],
    image: agenda,
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const toggle = (index) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="section-head">
        <span className="section-num">02</span>
        <h2 className="section-title">Servicios</h2>
      </div>
      <p className="section-intro">
        Lo que puedo construir para tu negocio, con ejemplos reales detrás de
        cada servicio.
      </p>

      <div className="accordion">
        {services.map((service, index) => (
          <div
            className={`acc-item ${active === index ? "open" : ""}`}
            key={service.title}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              className="acc-trigger"
              onClick={() => toggle(index)}
              aria-expanded={active === index}
            >
              <span className="acc-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="acc-title">{service.title}</span>
              <span className="acc-icon" aria-hidden="true" />
            </button>

            <div className="acc-body">
              <div className="acc-content">
                <p>{service.body}</p>
                <ul className="project-tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hovered !== null && (
        <img
          className="acc-float"
          src={services[hovered].image}
          alt=""
          aria-hidden="true"
          style={{ left: pos.x + 28, top: pos.y - 80 }}
        />
      )}
    </section>
  );
};

export default Services;
