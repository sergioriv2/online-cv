import React from "react";
import "../../components/components-css/PrincipalPage.css";

const _calculateAge = (birthday) => {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const AboutSection = () => {
  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1 id="about">Acerca de mi</h1>
        <hr></hr>
        <p>
          Ahora si, después de leer esa introducción dejame contarte en detalle
          quién soy.
        </p>
        <ul className="content__ask">
          <li>
            <p className="content__ask__question">
              <i>¿Quién eres y cómo te describirias? </i> 🔍
            </p>
            <p className="content__ask__answer">
              Mi nombre es Sergio Armando Rivera Cucho y tengo{" "}
              {_calculateAge(new Date(2002, 1, 14))} años, actualmente estoy
              cursando una tecnicatura de programación en la Universidad
              Tecnológica Nacional en Argentina. Creo que lo que mas me
              caracteriza es mi capacidad de proporcionar trabajos de calidad.
              Además me considero una persona responsable.
            </p>
          </li>
          <li>
            <p className="content__ask__question">
              <i>
                ¿Podrías nombrar una <strong>debilidad</strong> y{" "}
                <strong>fortaleza</strong> tuya?{" "}
              </i>{" "}
              🔍
            </p>
            <p className="content__ask__answer">
              Podria nombrar como fortaleza mi compromiso al tomar nuevas
              responsabilidades. Por otro lado podría nombrar como debilidad mi
              exceso de perfeccionismo, obligandome aveces a concentrarme en
              pequeñas cosas.
            </p>
          </li>
          <li>
            <p className="content__ask__question">
              <i>¿Desde cuándo programas?</i> 🔍
            </p>
            <p className="content__ask__answer">
              Empecé a programar desde el 2020, que fue el año en el que empecé
              a cursar en la UTN y todavía tengo muchas cosas por aprender. Pero
              creo que tengo lo necesario para considerarme un buen Jr.
              Developer. 👩‍💻
            </p>
          </li>
          <li>
            <p className="content__ask__question">
              <i>¿Qué softwares conoces?</i> 🔍
            </p>
            <p className="content__ask__answer">
              Tengo conocimientos en: C/C++, C#, .NET, .ASPX, HTML/CSS,
              JavaScript, SQL, React, Git
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
