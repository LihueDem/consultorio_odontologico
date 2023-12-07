import React from "react";

const CustomNewCard = ({ dataNovedades }) => {
  return (
    <>
      <div className="feature col ">
        {dataNovedades.map((novedades) => (
          <div>
            <h3 className="fs-2" key={novedades.id}>
              {novedades.titulo}
            </h3>
            <p>{novedades.descripcion}</p>
          </div>
        ))}
        <a href="#" className="text-info">
          Call to action
        </a>
      </div>
    </>
  );
};

export default CustomNewCard;
