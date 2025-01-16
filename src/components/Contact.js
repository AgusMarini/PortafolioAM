import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-info">
        <h2>Contacto</h2>
        <p>
          <span>Email:</span> agustina_1312@hotmail.com
        </p>
        <p>
          <span>Teléfono:</span> +54 223 4462089
        </p>
        <p>
          <span>País:</span> Argentina
        </p>
        <p>
          <span>Ciudad:</span> Mar del Plata
        </p>
      </div>
      <div className="form-container" data-aos="fade-up">
        <h2>Envíame un mensaje</h2>
        <form
          action="https://formsubmit.co/agustina_1312@hotmail.com" // Cambia al email que recibirás los mensajes
          method="POST"
        >
          {/* Campo para nombre */}
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* Campo para correo */}
          <div className="input-group">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              name="email" // IMPORTANTE: Este debe llamarse "email"
              placeholder="Tu correo electrónico"
              required
            />
          </div>

          {/* Campo para mensaje */}
          <div className="input-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>

          {/* Botón de envío */}
          <button type="submit" className="send-button">
            Enviar
          </button>
          <input type="hidden" name="_next" value="https://portafolioagustinamf.netlify.app/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
