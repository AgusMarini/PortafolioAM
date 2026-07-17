import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCertificate,
  faProjectDiagram,
  faEnvelope,
  faSun,
  faMoon,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Header = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      {/* Barra superior: marca + navegación + íconos */}
      <div className="header-container">
        <div className="brand">
          Agustina<span>.</span>dev
        </div>

        <nav className="nav">
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Abrir menú"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                <FontAwesomeIcon
                  icon={faCertificate}
                  style={{ marginRight: "5px" }}
                />
                Servicios
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                <FontAwesomeIcon
                  icon={faProjectDiagram}
                  style={{ marginRight: "5px" }}
                />
                Experiencia
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                <FontAwesomeIcon
                  icon={faProjectDiagram}
                  style={{ marginRight: "5px" }}
                />
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginRight: "5px" }}
                />
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-icons">
          <div className="social-icons" style={{ display: "flex", gap: "15px" }}>
            <a
              href="https://www.linkedin.com/in/agustina-marini-finoquetto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.4rem" }} />
            </a>
            <a
              href="https://github.com/AgusMarini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.4rem" }} />
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Cambiar tema"
          >
            {currentTheme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="hero">
        <h1>Agustina Marini Finoquetto</h1>
        <p className="hero-role">Desarrolladora Full Stack</p>
        <p className="hero-tagline">
          Llevo productos de la idea a producción: e-commerce, catálogos y
          sistemas de gestión para clientes reales, con React, Next.js, Angular
          y Java/Spring Boot. Graduada de la UTN, trabajo remoto.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            Ver proyectos
          </a>
          <a
            className="btn btn-secondary"
            href={`${process.env.PUBLIC_URL}/Agustina-Marini-Finoquetto-CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
