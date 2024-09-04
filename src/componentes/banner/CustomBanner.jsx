import React from "react";
import hero from "../../assets/img2.jpg";
import "./customBanner.css";
const CustomBanner = () => {
  return (
    <>
      <div className="container p-5">
        <div
          className="row"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div className="col-7">
            <div style={{ fontSize: "50px", fontWeight: "bold" }}>
              Dra. Gabriela Wehbe
            </div>
            <div style={{ fontSize: "25px", padding: "10px" }}>
              Atención adultos, especialista en edodoncia, estética, implantes y
              prótesis dentales
            </div>
            {/* <button className="btn btn-primary btn-lg mt-4">VER MAS</button> */}
          </div>
          <div className="col-5">
            <img
              src={hero}
              alt="header image"
              width={500}
              height={400}
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomBanner;
