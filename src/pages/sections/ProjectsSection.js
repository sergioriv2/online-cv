import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "../../components/components-css/PrincipalPage.css";
import ProjectSummary from "../../components/components-js/ProjectSummary";

const ProyectsSection = () => {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    let url = "/projects";

    const dataRequest = {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, dataRequest);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1 id="projects">Proyectos destacados</h1>
        <hr></hr>
        {data.map((summary) => {
          return (
            <ProjectSummary
              key={summary._id}
              id={summary._id}
              ProjectTitle={summary.title}
              DateRange={summary.date}
              ProjectDesc={summary.description}
              ProjectSoftwares={summary.softwares}
              ProjectRepos={summary.repository}
            ></ProjectSummary>
          );
        })}
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
