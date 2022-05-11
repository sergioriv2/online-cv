import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Section } from "../../components/Home/Section";
import content from "../../assets/home-content.json";
import { PageContext } from "../../context/pageContext";

const EducationDetail = styled.tr`
  & p,
  small {
    font-family: "Open Sans", sans-serif;
  }

  & p {
    color: var(--text);
  }

  & small {
    color: var(--subtext);
  }

  & td {
    vertical-align: top;
    table-layout: fixed;
  }

  & td:first-child p {
    font-weight: 400;
    font-size: 25px;
    color: var(--primary);
  }

  & td:last-child p {
    font-weight: 500;
  }
`;

const Table = styled.table`
  width: 100%;
  margin: 20px 0;
  border-spacing: 1em;
  @media screen and (min-width: 768px) {
    margin: 5% auto;

    width: 95%;
  }
`;

const EduactionSection = () => {
  const { language } = useContext(PageContext);
  const [data, setData] = useState(
    content.lang[language].page.home.sections.education
  );

  useEffect(() => {
    setData(content.lang[language].page.home.sections.education);
  }, [data, language]);

  return (
    <Section>
      <label id="education" className="anchor"></label>
      <h2>{data.header}</h2>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((el, index) => {
            return (
              <EducationDetail key={index}>
                <td>
                  <p>•</p>
                </td>
                <td>
                  <p>{el.title}</p>
                  <small>{el.where}</small>
                </td>
                <td>
                  <p>{`${el.date.start} - ${el.date.end}`}</p>
                </td>
              </EducationDetail>
            );
          })}
        </tbody>
      </Table>
    </Section>
  );
};

export default EduactionSection;
