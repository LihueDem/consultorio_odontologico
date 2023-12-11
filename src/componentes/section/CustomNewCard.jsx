import React from "react";

const CustomNewCard = ({ dataNovedades }) => {
  console.log(dataNovedades);
  return (
    <ul>
      {dataNovedades.map((nov) => (
        <div key={nov.id}>
          <h3 className="fs-2">{nov.title}</h3>
          <p>{nov.description}</p>

          <a href="#" className="text-info">
            Call to action
          </a>
        </div>
      ))}
    </ul>
  );
};

export default CustomNewCard;
