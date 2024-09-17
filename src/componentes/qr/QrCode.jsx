import { Row } from "react-bootstrap";
import QrImg from "./qr-gaby.png";
import "./qr.css";
const QrCode = () => {
  return (
    <div className="container qr-container d-flex flex-column ">
      <Row className="g-4">
        <h2>¿Deseas conseguir un turno ?</h2>
      </Row>
      <Row className="g-4">
        <img src={QrImg} alt="" className="qrImg" />
      </Row>
    </div>
  );
};

export default QrCode;
