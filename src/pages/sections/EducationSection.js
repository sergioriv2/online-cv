import React from "react";
import "../../components/components-css/PrincipalPage.css";

const EduactionSection = () => {
  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1>Formación Académica</h1>
        <hr></hr>
        <ul className="education-list">
          <li className="education-list__item">
            <div className="education-list__item__date">
              <p>2020 - Presente</p>
            </div>
            <div className="education-list__item__info">
              <p>Tecnicatura Superior en Programación</p>
              <p>Universidad Tecnológica Nacional (FRGP)</p>
            </div>
            <div className="education-list__item__status">
              <p>En curso.</p>
            </div>
          </li>
          <li className="education-list__item">
            <div className="education-list__item__date">
              <p>2013 - 2019</p>
            </div>
            <div className="education-list__item__info">
              <p>Bachiller en Administración Contable </p>
              <p>Instituto Federico Dickens</p>
            </div>
            <div className="education-list__item__status">
              <p>Recibido.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EduactionSection;
