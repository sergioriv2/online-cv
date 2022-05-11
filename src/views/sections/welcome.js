import { useContext, useState, useEffect } from "react";
import { Section } from "../../components/Home/Section";
import { PageContext } from "../../context/pageContext";
import styled from "styled-components";

import content from "../../assets/home-content.json";
import LanguageButton from "../../components/Home/LanguageButton";
import DownloadButton from "../../components/Home/DownloadButton";

const Content = styled.div`
  margin: 3% 0;

  & > p {
    margin-bottom: 20px;
    color: var(--subtext);
  }

  @media screen and (min-width: 768px) {
    margin: 2% 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;

  div {
    margin-left: 5%;
  }
`;

const HomeSection = () => {
  const { language } = useContext(PageContext);
  const [data, setData] = useState(
    content.lang[language].page.home.sections.welcome
  );

  useEffect(() => {
    setData(content.lang[language].page.home.sections.welcome);
  }, [data, language]);

  return (
    <Section>
      <label id="home" className="anchor"></label>
      <h1>{data.header} </h1>
      <ButtonContainer>
        <DownloadButton language={language}></DownloadButton>
        <LanguageButton></LanguageButton>
      </ButtonContainer>
      <Content
        dangerouslySetInnerHTML={{
          __html: data.paragraphs.join(""),
        }}
      ></Content>
    </Section>
  );
};

export default HomeSection;
