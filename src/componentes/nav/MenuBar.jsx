import React from "react";

//Pasamos las props del padre
const MenuBar = ({ dataMenu }) => {
  return (
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
        ;
      </ul>
    </div>
  );
};

export default MenuBar;
