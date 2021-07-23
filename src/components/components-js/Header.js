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
      <img
        className="header-component__banner"
        src="https://birchtree.nyc3.digitaloceanspaces.com/images/wwdc18/dev-dots.png"
        alt="banner"
      ></img>
      <div className="header-component__container">
        <Potrait src={foto} potraitSize="large" />
        <div className="header-component__container__info">
          <h1>Sergio Rivera</h1>
          <h4>Jr. Developer</h4>
        </div>
        <div className="header-component__container__buttons">
          <form method="get" action={cv}>
            <button type="submit">Descargar CV</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
