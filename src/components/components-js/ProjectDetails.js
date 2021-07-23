import React from "react";
import { useState } from "react/cjs/react.development";
import "../components-css/ProjectDetails.css";
import LoadingSpinner from "./LoadingSpinner";
import DetailsImage from "./DetailsImage";

const ProjectSummary = (props) => {
  const {
    DateRange,
    ProjectTitle,
    ProjectDesc,
    ProjectSoftwares,
    ProjectRepos,
    id,
  } = props;

  const [imagesData, setImagesData] = useState(null);
  const [videosData, setVideosData] = useState(null);

  const [imagesLoading, setImagesLoading] = useState(true);
  const [videosLoading, setVideosLoading] = useState(true);

  const [open, setOpen] = useState(false);

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
    setImagesLoading(false);
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

    setVideosData(videos);
    setVideosLoading(false);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget.open);
    if (imagesData === null) fetchImages();
    if (videosData === null) fetchVideos();
    console.log(imagesData);
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
          {videosLoading ? null : videosData.length !== 0 ? (
            <details>
              <summary>Videos</summary>
              <div className="summary-video__wrapper"></div>
            </details>
          ) : null}

          <details>
            <summary>Imagenes</summary>
            {imagesLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              imagesData.map((data) => {
                return (
                  <DetailsImage
                    url={data.url}
                    alt={data._id}
                    key={data._id}
                  ></DetailsImage>
                );
              })
            )}
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

/**
          <details>
            <summary>Imagenes</summary>
            {imagesLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              imagesData.media.images.map((data) => {
                return (
                  <DetailsImage
                    url={data.url}
                    alt={data._id}
                    key={data._id}
                  ></DetailsImage>
                );
              })
            )}
          </details> */
