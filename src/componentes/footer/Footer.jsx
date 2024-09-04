import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Consultorio Odontológico</h3>
        </div>
        <div className="footer-contact">
          <p>
            <strong>Dirección:</strong> Calle Falsa 123, Ciudad, País
          </p>
          <p>
            <strong>Teléfono:</strong> +1 234 567 890
          </p>
          <p>
            <strong>Email:</strong> contacto@odontologia.com
          </p>
        </div>
        <div className="footer-hours">
          <p>
            <strong>Horarios de Atención:</strong>
          </p>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábado: 9:00 AM - 2:00 PM</p>
          <p>Domingo: Cerrado</p>
        </div>
        <div className="footer-social">
          <p>
            <strong>Síguenos en:</strong>
          </p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Consultorio Odontológico. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
