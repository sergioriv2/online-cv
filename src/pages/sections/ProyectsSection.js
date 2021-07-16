import React from "react";
import "../../components/components-css/PrincipalPage.css";

const ProyectsSection = () => {
  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1>Proyectos</h1>
        <hr></hr>
        <div className="proyect__sumary">
          <h3>2021 - 2021</h3>
          <details>
            <summary>New Wave Games</summary>
            <div>
              <p>
                Página que simula ventas de seriales de juegos con conexión a
                una base de datos SQL, cuenta con creacion de usuarios, compras,
                opciones de adminsitrador tales como ABML de juegos, categorias,
                estadísticas.
              </p>
            </div>
          </details>
        </div>
        <div className="proyect__sumary">
          <h3>2020 - 2021</h3>
          <details>
            <summary>League of Builds</summary>
            <div>
              <p>
                Software gestor de archivos con interfaz basado en el videojuego
                League of Legends”
              </p>
            </div>
          </details>
        </div>
        <div className="proyect__sumary">
          <h3>2020 - 2020</h3>
          <details>
            <summary>AMIX</summary>
            <div>
              <p></p>
            </div>
          </details>
        </div>
        <div className="proyect__sumary">
          <h3>2020 - 2020</h3>
          <details>
            <summary>MineCards</summary>
            <div>
              <p></p>
            </div>
          </details>
        </div>
        <div className="proyect__sumary">
          <h3>2020 - 2020</h3>
          <details>
            <summary>Diez Mil</summary>
            <div>
              <p></p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default ProyectsSection;
