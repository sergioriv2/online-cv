import React from "react";
import useFetch from "../../hooks/useFetch";

import ProjectDetails from "../../components/components-js/ProjectDetails";
import LoadingSpinner from "../../components/components-js/LoadingSpinner";

import "./css/PrincipalPage.css";

const ProyectsSection = () => {
  const { data, loading } = useFetch(
    "https://online-cvapp.herokuapp.com/api/projects/"
  );

  const orderProjects = () => {
    data.sort((a, b) => {
      if (a.date.start < b.date.start) return 1;
      if (a.date.start >= b.date.start) {
        if (a.date.end < b.date.end) return 1;
        else return -1;
      }
      return 0;
    });

    return data.map((summary) => {
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
    });
  };

  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1 id="projects">Proyectos destacados</h1>
        <hr></hr>

        {loading ? <LoadingSpinner /> : orderProjects()}
      </div>
    </section>
  );
};

export default ProyectsSection;
