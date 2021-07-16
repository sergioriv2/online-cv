import React from "react";
import Header from "../components/components-js/Header";
import Content from "./sections/principalPageContent";

import "../components/components-css/PrincipalPage.css";

const PrincipalPage = () => {
  return (
    <div className="PrincipalPage">
      <Header></Header>
      <Content></Content>
      <footer></footer>
    </div>
  );
};

/* <section>
       
      </section>
      <section>
        
      </section>
      <section>
        <h1>Datos personales</h1>
        <hr></hr>
        <ul>
          <li>
            <strong>Email:</strong> sergiorive02@gmail.com
          </li>
          <li>
            <strong>Fecha Nacimiento:</strong> 14 de Enero, 2002
          </li>
          <li>
            <strong>Residencia:</strong> Del Viso, Pilar, Buenos Aires
          </li>
          <li></li>
        </ul>
      </section>
      <section>
        <h1>proyectos</h1>
        <hr></hr>
      </section>
      <section>
        <h1>Formacion academica</h1>
        <hr></hr>
      </section>
      <section>
        <h1>Hobbies</h1>
        <hr></hr>
      </section>
      <section>
        <h1>Habla conmigo</h1>
        <hr></hr>
      </section> */
export default PrincipalPage;
