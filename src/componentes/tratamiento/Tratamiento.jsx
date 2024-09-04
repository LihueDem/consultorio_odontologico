import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Bruxismo from "./img/bruxismo.jpg";
import Implantes from "./img/implante.png";
import Limpieza from "./img/limpieza.jpg";
import Protesis from "./img/protesis_dental1.jpg";
import Estetica from "./img/estetica.png";
import Edodoncia from "./img/edodoncia.jpg";
import Muela from "./img/muela.jpg";
import "./tratamiento.css";
const Tratamiento = () => {
  return (
    <>
      <div className="container tratamiento">
        <Row xs={1} md={2} className="g-4 tratamiento-row">
          <h2 className="tratamiento-h2">Tratamientos especializados</h2>
        </Row>

        <Row xs={1} md={2} className="g-4">
          <Card className="tratamiento-card">
            <img
              src={Bruxismo}
              alt=""
              variant="top"
              className="tratamiento-img"
            />
            <Card.Body>
              <Card.Title>Bruxismo</Card.Title>
            </Card.Body>
          </Card>
          <Card className="tratamiento-card">
            <img
              src={Implantes}
              alt=""
              variant="top"
              className="tratamiento-img"
            />
            <Card.Body>
              <Card.Title>Implantes</Card.Title>
            </Card.Body>
          </Card>
          <Card className="tratamiento-card">
            <img
              src={Protesis}
              alt=""
              variant="top"
              className="tratamiento-img"
            />
            <Card.Body>
              <Card.Title>Protesis dentales</Card.Title>
            </Card.Body>
          </Card>
          <Card className="tratamiento-card">
            <img
              src={Limpieza}
              alt=""
              variant="top"
              className="tratamiento-img"
            />
            <Card.Body>
              <Card.Title>Limpieza</Card.Title>
            </Card.Body>
          </Card>
          <Card className="tratamiento-card">
            <img
              src={Estetica}
              alt=""
              variant="top"
              className="tratamiento-img"
            />
            <Card.Body>
              <Card.Title>Estética</Card.Title>
            </Card.Body>
          </Card>
          <Card className="tratamiento-card">
            <img
              src={Edodoncia}
              alt=""
              variant="top"
              className="tratamiento-img"
            />
            <Card.Body>
              <Card.Title>Edodoncia</Card.Title>
            </Card.Body>
          </Card>
          <Card className="tratamiento-card">
            <img src={Muela} alt="" variant="top" className="tratamiento-img" />
            <Card.Body>
              <Card.Title>Extracciones</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default Tratamiento;
