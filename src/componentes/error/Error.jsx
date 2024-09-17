import { Button } from "react-bootstrap";
import Navbar from "../nav/NavBar.jsx";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                  <span className="display-1 fw-bold">40</span>
                  <i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
                  <span className="display-1 fw-bold bsb-flip-h">4</span>
                </h2>
                <h3 className="h2 mb-2">Oops! Error 404.</h3>
                <p className="mb-5">
                  El sitio que estas buscando no se encuentra disponible.
                </p>
                <Button className="error-btn btn bsb-btn-5xl rounded-pill px-5 fs-6 m-0">
                  Volver al Inicio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;
