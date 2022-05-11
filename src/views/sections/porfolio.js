import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import Project from "../../components/Home/Project";
import { Section } from "../../components/Home/Section";
import ProjectPlaceholder from "../../components/Home/ProjectPlaceholder";

const ProyectsSection = () => {
  const { data, loading } = useFetch(
    "https://online-cvapp.herokuapp.com/api/projects/"
  );

  const [sortedProjects, setSortedProjects] = useState([]);

  useEffect(() => {
    const orderProjects = () => {
      if (data.length > 0 && !loading) {
        const result = data.sort((a, b) => {
          const dateA = new Date(a.date.start);
          const dateB = new Date(b.date.start);

          const dateAEnd = new Date(a.date.end);
          const dateBEnd = new Date(b.date.end);

          if (dateA < dateB) return 1;
          if (dateA >= dateB) {
            if (dateAEnd < dateBEnd) return 1;
            else return -1;
          }
          return 0;
        });

        setSortedProjects(result);
      }
    };
    orderProjects();
  }, [data, loading]);

  return (
    <Section>
      <label id="porfolio" className="anchor"></label>
      <h2>Porfolio</h2>

      {loading ? (
        <ProjectPlaceholder />
      ) : (
        sortedProjects.map((project, index) => {
          return (
            <Project
              key={project.uid}
              id={project.uid}
              index={index}
              project={project}
            ></Project>
          );
        })
      )}
    </Section>
  );
};

export default ProyectsSection;
