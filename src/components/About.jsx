import React from "react";

const About = () => {
  const stack = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Node.js / Express",
    "Java / Spring Boot",
    "Python / Flask",
    "PostgreSQL",
    "Prisma ORM",
    "Git / GitHub",
  ];

  return (
    <section id="about">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2 className="section-title">Sobre mí</h2>
      </div>

      <div className="bento">
        <div className="bento-card bento-bio" data-aos="fade-up">
          <p>
            Soy <strong>Técnica en Programación (UTN, Mar del Plata)</strong> y
            trabajo como desarrolladora full stack. Me gusta llevar las cosas
            hasta el final: no me quedo en el prototipo, sino que llevo el
            proyecto a producción y lo sostengo funcionando — un e-commerce,
            una plataforma de catálogo y gestión para una distribuidora,
            aplicaciones que mantengo activas para un equipo en EE.UU.
          </p>
          <p>
            Trabajo con flujo Git completo (branches, pull requests, code
            reviews) y uso IA como parte habitual de mi proceso, sin perder el
            control de lo que escribo.
          </p>
          <a
            className="btn btn-primary"
            href={`${process.env.PUBLIC_URL}/Agustina-Marini-Finoquetto-CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Descargar CV
          </a>
        </div>

        <div className="bento-card bento-stat" data-aos="fade-up">
          <span className="stat-value">4</span>
          <span className="stat-label">
            proyectos para clientes reales, 2 hoy en producción
          </span>
        </div>

        <div className="bento-card bento-stat" data-aos="fade-up">
          <span className="stat-value">100%</span>
          <span className="stat-label">
            remoto — experiencia en equipos distribuidos (UTC-3)
          </span>
        </div>

        <div className="bento-card bento-stack" data-aos="fade-up">
          <h3>Stack</h3>
          <ul className="chip-list">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="bento-card bento-wide" data-aos="fade-up">
          <h3>IA en el flujo</h3>
          <p>
            LLMs (Claude, GPT) integrados al desarrollo: prototipos más
            rápidos, revisión propia de todo el código.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;