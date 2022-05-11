import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import content from "../../assets/home-content.json";

import { Section } from "../../components/Home/Section";
import { QuestionAnswer } from "../../components/Home/QuestionAnswer";
import { PageContext } from "../../context/pageContext";

const QALayout = styled.ul`
  @media screen and (min-width: 768px) {
    margin: 2% 0;
  }
`;

const Paragraph = styled.p`
  margin: 2% 0;
`;

const AboutSection = () => {
  const { language } = useContext(PageContext);
  const [data, setData] = useState(
    content.lang[language].page.home.sections.aboutMe
  );

  useEffect(() => {
    setData(content.lang[language].page.home.sections.aboutMe);
  }, [language, data]);

  return (
    <Section>
      <label id="about" className="anchor"></label>
      <h2>{data.header}</h2>
      {data.paragraphs.map((el, i) => (
        <Paragraph key={i}>{el}</Paragraph>
      ))}

      <QALayout>
        {data.qa.map((el, i) => (
          <QuestionAnswer key={i} data={el}></QuestionAnswer>
        ))}
      </QALayout>
    </Section>
  );
};

export default AboutSection;
