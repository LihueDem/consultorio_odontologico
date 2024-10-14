import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
//import Afta from "./img/afta.png";
//import Bruxismo from "./img/bruxismo.png";
//import Hilo from "./img/hilo.png";
//import Enemigo from "./img/enemigo.png";
import "./tarjeta.css";
import { tarjetaData } from "../../data/Tarjetas.js";

const Tarjeta = () => {
  return (
    <>
      <div className="container">
        <Row xs={1} md={2} className="g-4 tarjeta-row">
          <h2 className="pb-2 border-bottom tarjeta-h2">Recomendaciones</h2>
        </Row>
        <div className="row">
          {/* CARD COMIENZO */}
          {tarjetaData.map((item) => (
            <Card className="recomendacion-card" key={item.id}>
              <Card.Img
                variant="top"
                src={item.img}
                className="recomendacion-img"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
          {/* CARD FINAL */}
        </div>
      </div>
    </>
  );
};

export default Tarjeta;

// const Tarjeta = () => {
//     return (
//       <>
//         <div className="container">
//           <h2 className="pb-2 border-bottom ">RECOMENDACIONES</h2>
//           <div className="feature col">
//             {tarjetaData.map((item) => (
//               <Card style={{ width: "18rem" }} key={item.id}>
//                 <Card.Img variant="top" src={item.img} />
//                 <Card.Body>
//                   <Card.Title>{item.name}</Card.Title>
//                   <Card.Text>{item.descripcion}</Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   };

//<Card className="recomendacion-card">
//<Card.Img variant="top" src={Afta} className="recomendacion-img" />
//<Card.Body>
//  <Card.Title>Consejos</Card.Title>
//  <Card.Text>
//    - Presta atención a lo que comes. <br />
//    - Elije alimento saludable. <br />
//    - Sigue buenos hábitos de higiene bucal. <br />- Reduce el
//    estrés.
//  </Card.Text>
//</Card.Body>
//</Card>
//<Card className="recomendacion-card">
//<Card.Img
//  variant="top"
//  src={Enemigo}
//  className="recomendacion-img"
///>
//<Card.Body>
//  <Card.Title>Recomendación</Card.Title>
//  <Card.Text>
//    Puedes evitarlo cepillandote los dientes después de consumir
//    estos alimentos: <br />
//    Tabaco. <br />
//    Café. <br />
//    Frutos de colores intensos. <br />
//    Vino tinto.
//  </Card.Text>
//</Card.Body>
//</Card>
//<Card className="recomendacion-card">
//<Card.Img variant="top" src={Hilo} className="recomendacion-img" />
//<Card.Body>
//  <Card.Title>¿Cómo se usa?</Card.Title>
//  <Card.Text>
//    Cortar 30-40 cm de hilo dental. Sosten el hilo entre los dedos
//    pulgares e índice y deslízalo suavemente hacia arriba y hacia
//    abajo entre los dientes haciendo zig zag. Curva el hilo dental
//    suavemente alrededor de la base de cada diente, asegurándote de
//    que pase por debajo de la encía. No lo hagas demasiado fuerte.
//  </Card.Text>
//</Card.Body>
//</Card>
