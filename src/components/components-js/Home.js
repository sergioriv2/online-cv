import React from "react";

import Aside from "./Aside";
import PrincipalPage from "../../pages/PrincipalPage";

import "../components-css/HomePage.css";

const Home = () => {
  return (
    <div className="HomePage-component">
      <Aside />
      <PrincipalPage></PrincipalPage>
    </div>
  );
};

export default Home;
