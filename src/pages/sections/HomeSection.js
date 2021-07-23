import React from "react";
import "../../components/components-css/PrincipalPage.css";

const HomeSection = () => {
  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1 id="home">Bienvenida</h1>
        <hr></hr>
        <p>¡Hola, te doy la bienvenida a mi curriculum online! 💻 </p>
        <p>
          Primero dejame presentarme, soy un <strong>Jr. Developer</strong> y
          <strong> estudiante</strong>. En estos momentos estoy buscando mi
          primera experiencia laboral, mi enfoque es seguir aprendiendo nuevas
          cosas al mismo tiempo que vaya trabajando.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
