import React from "react";
import CustomNewCard from "./CustomNewCard.jsx";
import { novedadesData } from "../../data/Novedades.js";

const CustomNewSection = () => {
  console.log;
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
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="row">
                <CustomNewCard dataNovedades={novedadesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNewSection;
