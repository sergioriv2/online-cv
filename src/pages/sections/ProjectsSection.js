import React from "react";
import useFetch from "../../hooks/useFetch";

import ProjectDetails from "../../components/components-js/ProjectDetails";
import LoadingSpinner from "../../components/components-js/LoadingSpinner";

import "../../components/components-css/PrincipalPage.css";

const ProyectsSection = () => {
  const { data, loading } = useFetch("/projects");

  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1 id="projects">Proyectos destacados</h1>
        <hr></hr>

        {loading ? (
          <LoadingSpinner />
        ) : (
          data.map((summary) => {
            return (
              <ProjectDetails
                key={summary._id}
                id={summary._id}
                ProjectTitle={summary.title}
                DateRange={summary.date}
                ProjectDesc={summary.description}
                ProjectSoftwares={summary.softwares}
                ProjectRepos={summary.repository}
              ></ProjectDetails>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ProyectsSection;

/**  <div className="proyect__sumary">
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
        </div> */
