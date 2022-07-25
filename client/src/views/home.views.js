import React from "react";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import Content from "./sections";
import styled from "styled-components";
import { useState } from "react";
import { PageContext } from "../context/pageContext";
import useMediaQuery from "../hooks/useMediaQuery";

// import "../components-css/HomePage.css";

const Layout = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--background-1);
`;

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [language, setLanguage] = useState("en");

  return (
    <PageContext.Provider
      value={{ isMobileDisplay: isMobile, language, setLanguage }}
    >
      <Layout isMobile={isMobile}>
        <Header></Header>
        <Aside />
        <Content></Content>
      </Layout>
    </PageContext.Provider>
  );
};

export default Home;
