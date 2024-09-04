import Carousel from "react-bootstrap/Carousel";
import Consultorio from "./img/consultorio.jpeg";
import Consultorio1 from "./img/consultorio1.jpeg";
import Consultorio2 from "./img/consultorio2.jpeg";
import "./carousell.css";
const Carousell = () => {
  return (
    <>
      <div className="container">
        <Carousel className="carousell">
          <Carousel.Item>
            <img
              src={Consultorio}
              alt=""
              text="First slide"
              className="carousel-img"
            />
            <Carousel.Caption>
              <h3>Consultorio</h3>
              <p>Sala de atención a pacientes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Consultorio1}
              alt=""
              text="First slide"
              className="carousel-img"
            />
            <Carousel.Caption>
              <h3>Consultorio</h3>
              <p>Sala de atención a pacientes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Consultorio2}
              alt=""
              text="First slide"
              className="carousel-img"
            />
            <Carousel.Caption>
              <h3>Consultorio</h3>
              <p>Sala de atención a pacientes</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carousell;
