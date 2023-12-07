import React from "react";
import MenuBar from "./MenuBar.jsx";
//Trae el objeto
import { menuData } from "../../data/Menu.js";

const NavBar = () => {
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
            <span className="navbar-toggler-icon"></span>
          </button>
          //dataMenu = toma las propiedades del json
          <MenuBar dataMenu={menuData} />
          <form className="d-flex" role="search">
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-info">
                Sign-up
              </button>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
