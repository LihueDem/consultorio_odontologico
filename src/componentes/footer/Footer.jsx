import QrImg from "./qr-gaby.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-container">
        <div className="footer-logo">
          <h3 className="footer-h3">Consultorio Odontológico</h3>
        </div>
        <div className="footer-hours">
          <p>
            <strong>Horarios de Atención:</strong>
          </p>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábado: 9:00 AM - 2:00 PM</p>
          <p>Domingo: Cerrado</p>
          <div className="footer-contact">
            <p className="footer-p">Teléfono: +54 3816222826</p>
            <p>
              <strong>Email:</strong> contacto@odontologia.com
            </p>
          </div>
        </div>
        <div className="footer-social">
          <p className="footer-p">
            Contacto directamente con la profesional con qr
          </p>
          <img src={QrImg} alt="" className="qrImg" />
          {/* <p>
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
          </a> */}
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p>
          &copy; 2024 Consultorio Odontológico. Todos los derechos reservados.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
