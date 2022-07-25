import React from "react";
import About from "./about";
import Welcome from "./welcome";
import Porfolio from "./porfolio";
import Education from "./education";

import styled from "styled-components";

const Layout = styled.div`
  & > section:nth-child(1) {
    margin-top: 150px;
  }

  @media screen and (min-width: 768px) {
    & > section:nth-child(1) {
      margin-top: 5%;
    }
  }
`;

const Content = () => {
  return (
    <Layout>
      <Welcome></Welcome>
      <About></About>
      <Porfolio></Porfolio>
      <Education></Education>
    </Layout>
  );
};

export default Content;
