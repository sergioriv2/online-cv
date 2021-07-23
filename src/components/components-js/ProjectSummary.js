import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "../components-css/ProjectSummary.css";

const ProjectSummary = (props) => {
  const {
    DateRange,
    ProjectTitle,
    ProjectDesc,
    ProjectSoftwares,
    ProjectRepos,
    id,
  } = props;

  const [open, setOpen] = useState(false);
  const [imagesData, setImagesData] = useState([]);
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const url = "projects/" + id + "/images";

      const dataRequest = {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, dataRequest);
      const {
        media: { images },
      } = await response.json();

      //console.log(images);
      setImagesData(images);
    };

    const fetchVideos = async () => {
      const url = "projects/" + id + "/videos";

      const dataRequest = {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, dataRequest);
      const {
        media: { videos },
      } = await response.json();

      //console.log(images);
      setVideosData(videos);
    };
    fetchImages();
    fetchVideos();
  }, [id]);

  const handleClick = (e) => {
    setOpen(e.currentTarget.open);
  };

  const classComponent = open
    ? "proyectSummary_Component ps_open"
    : "proyectSummary_Component";

  return (
    <div className={classComponent}>
      <p className="summary__dateRange">
        {DateRange.start + " - " + DateRange.end}
      </p>
      <details className="summary__details" onToggle={(e) => handleClick(e)}>
        <summary className="summary__title">{ProjectTitle}</summary>
        <div className="summary__container">
          <p className="summary__container__desc">{ProjectDesc}</p>

          {videosData.length !== 0 ? (
            <details>
              <summary>Videos</summary>
              <div className="summary-video__wrapper"></div>
            </details>
          ) : null}

          <details>
            <summary>Imagenes</summary>
            {imagesData.map((data) => {
              return <img src={data.url} alt={data._id} key={data._id}></img>;
            })}
          </details>

          <p className="summary__container__softwares">{ProjectSoftwares}</p>
          <a className="summary__container__link" href={ProjectRepos}>
            Repositorio/Página Web
          </a>
        </div>
      </details>
    </div>
  );
};

export default ProjectSummary;
