import { useContext } from "react";
import styled from "styled-components";

import "react-loading-skeleton/dist/skeleton.css";
import useFetch from "../../hooks/useFetch";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { PageContext } from "../../context/pageContext";

const Layout = styled.article`
  margin: 50px 0;
  min-height: 400px;
  & > h3,
  h6 {
    font-family: "Raleway", sans-serif;
  }

  & > h3 {
    font-size: 35px;
    font-weight: 400;
    text-transform: uppercase;
  }

  & > h6 {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 10px;
    margin-bottom: 10px;
    color: var(--secondary);
  }

  @media screen and (min-width: 768px) {
    & > h3 {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    & > h3 {
      font-size: 50px;
    }

    & > h6 {
      font-size: 15px;
    }
  }
`;
const DetailsLayout = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 350px;
    ${(props) => {
      if (props.DynamicReverse % 2 === 0) {
        return `flex-direction: row-reverse; margin: 50px 0;`;
      }
    }}
  }
`;

const Details = styled.div`
  margin: 15px 0;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  & > p {
    line-height: 2em;
    padding-right: 10px;
  }

  & > img {
    object-fit: contain;
  }

  & > ul {
    margin: 20px 0;
    color: var(--text);
    font-family: "Kanit", sans-serif;
    list-style-image: url("../../assets/images/check.png");

    & li {
      display: flex;

      & p:nth-child(1) {
        font-size: 20px;
        color: var(--primary);
      }

      & p:nth-child(2) {
        margin-left: 20px;
      }
    }
  }

  & a {
    align-self: center;
  }

  @media screen and (min-width: 1024px) {
    min-height: 300px;
    width: 50%;
    margin: 0;
    margin-left: 20px;

    & a {
      align-self: flex-start;
    }
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 85px;
  background-color: var(--text);
  cursor: pointer;
  text-decoration: none;

  &:hover span {
    transform: translateY(-0.33em);
  }

  &:active span {
    transform: translateY(0);
  }

  & > span {
    color: var(--text);
    background-color: black;
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--text);
    padding: 0.75em 1.5em;
    font-size: 12px;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-weight: 400;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }
`;

const Images = styled.div`
  margin: 15px 0;
  max-width: 450px;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    max-width: 45%;
    margin: 0;
  }
`;

const Project = (props) => {
  const { project, index, id } = props;
  const { language } = useContext(PageContext);
  const { date, title, repository, softwares } = project;

  const { data: imgs, loading: imgsLoading } = useFetch(
    `https://online-cvapp.herokuapp.com/api/images/project/${id}/`
  );

  const { data: description, loading: descLoading } = useFetch(
    `https://online-cvapp.herokuapp.com/api/descriptions/project/${id}/lang/${language}`
  );

  const images = imgs.map((el) => {
    return { original: el.images.original };
  });

  return (
    <Layout>
      {!project?.unfinished ? (
        <h6>{`${language === "es" ? "INICIO" : "START"} ${new Date(
          date.start
        ).getFullYear()} | ${language === "es" ? "FIN" : "END"} ${new Date(
          date.end
        ).getFullYear()}`}</h6>
      ) : (
        <h6>{`${language === "es" ? "INICIO" : "START"} ${new Date(
          date.start
        ).getFullYear()} | ${
          language === "es" ? "EN DESARROLLO" : "STILL IN DEVELOPMENT"
        }`}</h6>
      )}
      <h3>{`0${index + 1}. ${title}`}</h3>
      <DetailsLayout DynamicReverse={index}>
        <Details>
          <p>{descLoading ? null : description?.description}</p>
          <ul>
            {softwares.map((el) => (
              <li key={el}>
                <p>•</p>
                <p>{el}</p>
              </li>
            ))}
          </ul>
          <Button href={repository} target="_blank">
            <span>Repo</span>
          </Button>
        </Details>

        <Images>
          {imgsLoading ? null : (
            <ImageGallery
              lazyload={true}
              autoPlay={true}
              items={images}
            ></ImageGallery>
          )}
        </Images>
      </DetailsLayout>
    </Layout>
  );
};

export default Project;
