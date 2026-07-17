import React, { useState } from "react";
import "./Experience.css";

import bellaVista from "./bellavista.png";
import stoneControl from "./stonecontrol.png";
import agenda from "./inicioSesionAgendaDentista.png";

const experiences = [
  {
    company: "BellaVista Pinturerías",
    role: "Desarrolladora Full Stack · Freelance",
    period: "2025 — Hoy",
    stack: "Next.js · TypeScript · Prisma",
    note: "E-commerce en producción con panel administrativo y stock en tiempo real.",
    image: bellaVista,
  },
  {
    company: "Stone Control",
    role: "Desarrolladora Full Stack · Freelance",
    period: "2026",
    stack: "Angular · Spring Boot · PostgreSQL",
    note: "Plataforma de catálogo premium con backoffice y autenticación JWT.",
    image: stoneControl,
  },
  {
    company: "Raíces Sur",
    role: "Desarrolladora Full Stack",
    period: "2025 — 2026",
    stack: "Node.js · SQL · Git",
    note: "Backend de un sistema interno de asistencia en un equipo 100% remoto.",
    image: null,
    initials: "RS",
  },
  {
    company: "Trans World Compliance",
    role: "Desarrolladora Full Stack · Pasantía",
    period: "2025",
    stack: "Java · Groovy · Scrum",
    note: "Mantenimiento de una app de producción para una empresa de EE.UU., equipo distribuido en Italia.",
    image: null,
    initials: "TWC",
  },
  {
    company: "Consultorio Odontológico",
    role: "Desarrolladora Backend · Freelance",
    period: "2024",
    stack: "Python · Flask · SQLAlchemy",
    note: "Sistema de turnos con validación de disponibilidad en tiempo real.",
    image: agenda,
  },
];

const Experience = () => {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section id="experience">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2 className="section-title">Experiencia</h2>
      </div>

      <div
        className="exp-block"
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setHovered(null)}
      >
        {experiences.map((exp, index) => (
          <div
            className="exp-row"
            key={exp.company}
            onMouseEnter={() => setHovered(index)}
          >
            <div className="exp-main">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
            </div>
            <span className="exp-stack">{exp.stack}</span>
            <span className="exp-period">{exp.period}</span>
          </div>
        ))}

        {hovered !== null && (
          <div
            className="exp-preview"
            style={{ left: pos.x + 26, top: pos.y - 70 }}
            aria-hidden="true"
          >
            {experiences[hovered].image ? (
              <img src={experiences[hovered].image} alt="" />
            ) : (
              <div className="exp-preview-fallback">
                {experiences[hovered].initials}
              </div>
            )}
            <p>{experiences[hovered].note}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
