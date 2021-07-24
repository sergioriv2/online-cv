import React from "react";
import Header from "../components/components-js/Header";
import Content from "./sections/PrincipalPageContent";

import "./sections/css/PrincipalPage.css";

const PrincipalPage = () => {
  return (
    <div className="PrincipalPage">
      <Header></Header>
      <Content></Content>
      <footer></footer>
    </div>
  );
};

export default PrincipalPage;
