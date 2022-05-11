import styled from "styled-components";
import options from "../../assets/home-content.json";
import cv_spanish from "../../assets/sergio-rivera.pdf";
import cv_english from "../../assets/sergio-rivera-english.pdf";

import { useEffect, useState } from "react";

const Layout = styled.button`
  border: 2px solid var(--primary);
  outline: 0;
  background-color: transparent;
  color: var(--text);
  font-family: "Open Sans", "sans-serif";
  font-size: 15px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;

  &:active,
  :hover {
    background-color: var(--primary);
  }
`;

const DownloadButton = ({ language = "es" }) => {
  const [data, setData] = useState(
    options.lang[language].page.home.sections.welcome.download
  );

  useEffect(() => {
    setData(options.lang[language].page.home.sections.welcome.download);
  }, [setData, language]);

  const handleClick = () => {
    if (language === "es") {
      window.open(cv_spanish);
    } else if (language === "en") window.open(cv_english);
    else window.open(cv_english);
  };

  return (
    <Layout type="button" onClick={handleClick}>
      {data.desc}
    </Layout>
  );
};

export default DownloadButton;
