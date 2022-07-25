import styled from "styled-components";

const Layout = styled.section`
  margin: 5% 5%;
  transition: margin 0.3s;
  @media screen and (min-width: 768px) {
    margin: 5% 5%;
  }
`;

const Content = styled.article`
  & > h2 {
    font-size: 40px;
    text-transform: uppercase;
    color: var(--text);
  }

  & > h1 {
    font-size: 2.5em;
    text-align: left;
    padding: 5px 0;
    text-transform: capitalize;
    white-space: pre-line;
    line-height: 1.5em;
    color: var(--primary);
    font-family: "Raleway", sans-serif;
  }

  & .anchor {
    display: block;
    visibility: hidden;
    scroll-margin-top: 8em;
  }

  @media screen and (min-width: 768px) {
    & .anchor {
      display: block;
      visibility: hidden;
      scroll-margin-top: 2.5em;
    }

    & > h2 {
      font-size: 45px;
      text-transform: uppercase;
      position: sticky;
      top: 0;
      z-index: 20;
      background-color: var(--background-1);
      scroll-margin-top: 2.5em;
    }
  }
`;

export const Section = ({ children }) => {
  //   console.log(props);

  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};
