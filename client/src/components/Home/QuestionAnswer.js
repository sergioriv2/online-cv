import styled from "styled-components";

const Layout = styled.li`
  margin: 5% 0;
`;
const Question = styled.h3`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 23px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
const Answer = styled.p`
  margin-top: 15px;
  font-size: 16px;
`;

export const QuestionAnswer = ({ data }) => {
  return (
    <Layout>
      <Question>{data.question}</Question>
      <Answer>{data.answer}</Answer>
    </Layout>
  );
};
