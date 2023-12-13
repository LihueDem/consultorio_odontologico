import React from "react";

const CustomNewCard = ({ dataNovedades }) => {
  console.log(dataNovedades);
  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="row">
        {dataNovedades.map((nov) => (
          <div key={nov.id}>
            <h3 className="fs-2">{nov.title}</h3>
            <p>{nov.description}</p>

            <a href="#" className="text-info">
              Call to action
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomNewCard;
