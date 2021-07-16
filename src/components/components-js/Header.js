import React from "react";
import Potrait from "../components-js/Potrait";
import "../components-css/Header.css";

// Imagenes
//import banner from "../../resources/banner.png";
import foto from "../../resources/sergio-riv.jpg";
import cv from "../../resources/SergioRiv_CV.pdf";

const Header = (props) => {
  return (
    <header className="header-component">
      <div className="header-component__banner" alt="banner"></div>
      <div className="header-component__container">
        <Potrait src={foto} potraitSize="large" />
        <div className="header-component__container__info">
          <h1>Sergio Rivera</h1>
          <h4>Jr. Developer</h4>
        </div>
        <div className="header-component__container__buttons">
          <a href={cv} download>
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
