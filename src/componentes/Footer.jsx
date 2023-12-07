import React from "react";
import FooterItem from "./FooterItem";
import FooterSubscripcion from "./FooterSubscripcion";
const Footer = () => {
  return (
    <>
      <footer className="py-5 px-5 bg-white container">
        <div className="row">
          <FooterItem />
          <FooterItem />
          <FooterItem />
          <FooterSubscripcion />
        </div>
      </footer>
    </>
  );
};

export default Footer;
