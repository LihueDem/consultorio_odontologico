import React from "react";
//import { Link } from "react-router-dom";

const MenuBar = ({ dataMenu }) => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {dataMenu.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/CustomBanner">Consultorio</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
