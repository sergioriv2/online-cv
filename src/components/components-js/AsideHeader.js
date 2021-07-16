import React from "react";
import Potrait from "./Potrait";

import myself from "../../resources/sergio-riv.jpg";
import asideBanner from "../../resources/banner-aside.jpg";

import "../components-css/AsideHeader.css";

const AsideHeader = () => {
  return (
    <div className="asideHeader-component">
      <img alt="" className="asideHeader__banner" src={asideBanner} />
      <div className="asideHeader__info">
        <Potrait src={myself} potraitSize="small"></Potrait>
        <h1>Sergio Rivera</h1>
      </div>
    </div>
  );
};

export default AsideHeader;
