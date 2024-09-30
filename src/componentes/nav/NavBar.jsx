import React from "react";
import MenuBar from "./MenuBar.jsx";
import "./nav.css";
//Trae el objeto
import { menuData } from "../../data/Menu.js";

const NavBar = ({ onClick }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          {/* dataMenu = toma las propiedades del json */}
          <MenuBar dataMenu={menuData} />
          <div>
            <p
              className="navbar-nav me-auto mb-2 mb-lg-0 nav-p"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Dra Grabiela M. Wehbe
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
