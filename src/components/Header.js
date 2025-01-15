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
import "../App.css";

const Header = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Contenido principal del header */}
        <div className="header-content">
          <h1>Agustina Marini Finoquetto</h1>
          <p>Estudiante de Desarrollo Web</p>
        </div>

        {/* Botón y menú de navegación */}
        <nav className="nav">
          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Abrir menú"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Menú de navegación */}
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#certifications" onClick={closeMenu}>
                <FontAwesomeIcon
                  icon={faCertificate}
                  style={{ marginRight: "5px" }}
                />
                Certificaciones
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

        {/* Botón de cambio de tema */}
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
    </header>
  );
};

export default Header;
