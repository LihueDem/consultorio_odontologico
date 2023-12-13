import React from "react";
import CustomNewCard from "./CustomNewCard.jsx";
import { novedadesData } from "../../data/Novedades.js";

const CustomNewSection = ({ isLoginUser }) => {
  if (!isLoginUser) {
    return (
      <div className="container py-5">
        <div className="alert alert-info">
          <strong>Atencion! </strong>No tiene acceso al sistema!
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="px-4 py-5 "
        id="featured-3"
        style={{ backgroundColor: "#f7f8f9" }}
      >
        <div className="container">
          <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
          <div className="feature col ">
            <CustomNewCard dataNovedades={novedadesData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNewSection;
