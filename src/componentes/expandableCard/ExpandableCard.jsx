import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Bruxismo from "./bruxismo.jpg";
import Implante from "./implante.png";
import Protesis from "./protesis_dental1.jpg";
import Limpieza from "./limpieza.jpg";
import Estetica from "./estetica.png";
import Edodoncia from "./edodoncia.jpg";
import Extracciones from "./muela.jpg";
import BlaAntes from "./bla-antes.png";
import BlaDespues from "./bla-despues.png";
import ImplaAntes from "./implantes-antes.png";
import ImplaDespues from "./implantes-despues.png";
import LimAntes from "./limpieza-antes.png";
import LimDespues from "./limpieza-despues.png";
import ProteAntes from "./protesis-antes.png";
import ProteDespues from "./protesis-despues.png";
import ExtraAntes from "./extraccion-antes.png";
import ExtraDespues from "./extraccion-despues.png";
import EdoAntes from "./edodoncia-antes.png";
import EdoDespues from "./edodoncia-despues.png";
import "./expandableCard.css";
const ExpandableCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <Row className="g-4">
          <h2>Servicios que realizo</h2>
        </Row>

        <Row xs={1} md={2} className="g-4">
          {/*Card 1*/}
          <Card className="cardExpand">
            {/* Imagen principal */}
            <Card.Img
              variant="top"
              src={Extracciones}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Extracciones</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src={ExtraAntes}
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src={ExtraDespues}
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>

          {/*Card 2*/}
          <Card className="cardExpand">
            {/* Imagen principal */}
            <Card.Img
              variant="top"
              src={Implante}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Implantes</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src={ImplaAntes}
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src={ImplaDespues}
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/*Card 3*/}
          <Card className="cardExpand">
            {/* Imagen principal */}
            <Card.Img
              variant="top"
              src={Protesis}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Protesis</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src={ProteAntes}
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src={ProteDespues}
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* {Card 4} */}
          <Card className="cardExpand">
            {/* Imagen principal */}
            <Card.Img
              variant="top"
              src={Limpieza}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Limpieza</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src={LimAntes}
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src={LimDespues}
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* {Card 5} */}
          <Card className="cardExpand">
            {/* Imagen principal */}
            <Card.Img
              variant="top"
              src={Estetica}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Estetica</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src={BlaAntes}
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src={BlaDespues}
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* {Card 6} */}
          <Card className="cardExpand">
            {/* Imagen principal */}
            <Card.Img
              variant="top"
              src={Edodoncia}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Edodoncia</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src={EdoAntes}
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src={EdoDespues}
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>
          {/* {Card 7} */}
          <Card className="cardExpand">
            <Card.Img
              variant="top"
              src={Bruxismo}
              alt="Imagen principal"
              className="cardExpand-img"
            />
            <Card.Body>
              <Card.Title>Bruxismo</Card.Title>
              {/* <Card.Text></Card.Text> */}
              {/* Botón para desplegar */}
              <Button
                className="expand-btn"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-content"
                aria-expanded={open}
              >
                {open ? "Ocultar" : "Resultado"}
              </Button>
              {/* Contenido desplegable */}
              <Collapse in={open}>
                <div id="collapse-content">
                  <Card.Text className="mt-3">Antes</Card.Text>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/100"
                    alt="Imagen extra 1"
                    className="mt-3"
                  />
                  <Card.Text className="mt-3">Despues</Card.Text>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/100"
                    alt="Imagen extra 2"
                    className="mt-2"
                  />
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  );
};
export default ExpandableCard;

// const ExpandableCard = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="container">
//       <Card style={{ width: "18rem" }}>
//         {/* Imagen principal */}
//         <Card.Img
//           variant="top"
//           src="../tratamiento/img/bruxismo.jpg"
//           alt="Imagen principal"
//         />

//         <Card.Body>
//           <Card.Title>Bruxismo</Card.Title>
//           {/* <Card.Text></Card.Text> */}
//           {/* Botón para desplegar */}
//           <Button
//             variant="primary"
//             onClick={() => setOpen(!open)}
//             aria-controls="collapse-content"
//             aria-expanded={open}
//           >
//             {open ? "Ocultar" : "Resultado"}
//           </Button>

//           {/* Contenido desplegable */}
//           <Collapse in={open}>
//             <div id="collapse-content">
//               <Card.Text className="mt-3">
//                 Aquí tienes más imágenes y texto adicional que aparece cuando se
//                 despliega la tarjeta.
//               </Card.Text>

//               <Card.Img
//                 variant="top"
//                 src="https://via.placeholder.com/100"
//                 alt="Imagen extra 1"
//                 className="mt-3"
//               />
//               <Card.Img
//                 variant="top"
//                 src="https://via.placeholder.com/100"
//                 alt="Imagen extra 2"
//                 className="mt-2"
//               />
//             </div>
//           </Collapse>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default ExpandableCard;
