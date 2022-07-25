import { useState, useContext } from "react";
import { PageContext } from "../../context/pageContext";
import styled from "styled-components";
import HeaderImage from "../../assets/images/banner-aside.jpg";
import { AsideAvatar } from "../Avatar";
import { Option } from "./Option";
import { AsideContext } from "../../context/asideContext";
import useMenuOptions from "../../hooks/useMenuOptions";

const Layout = styled.aside`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background-2);

  transition: all 0.3s;
  ${(props) => (props.show ? "max-width: 120px;" : "max-width: 70px;")}
  max-width: 0px;

  @media screen and (min-width: 768px) {
    ${(props) => (props.show ? "max-width: 300px;" : "max-width: 120px;")}
  }
`;

// HEADER COMPONENTS
const Header = styled.div`
  width: 100%;
  position: relative;
  min-height: 270px;
`;

const HeaderBackground = styled.img`
  width: 100%;
  object-fit: cover;
  min-height: 167px;
  transition: all 0.5s;
  ${(props) => (props.show ? "opacity: 1;" : "opacity: 0;")}
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  ${(props) => (props.show ? "top: 65%;" : "top: 40%;")}
`;

const HeaderInfoDesc = styled.p`
  margin: 15px 15px 0 15px;
  text-transform: uppercase;
  transition: all 0.3s;

  ${(props) =>
    props.show && !props.isMobileDisplay
      ? "font-size: 30px; opacity: 1;"
      : "opacity: 0;"}

  font-family: "Kanit", sans-serif;
  font-weight: 700;
  text-align: center;
  color: var(--text);
  letter-spacing: 2px;

  @media (min-width: 1440px) {
    white-space: nowrap;
  }
`;

// CONTENT COMPONENTS
const Content = styled.div`
  margin-top: 40px;
`;

const OptionsList = styled.ul``;

const ToggleButton = styled.div`
  background-color: var(--primary);
  position: absolute;
  right: -20px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
  z-index: 40;
  &:after {
    content: "<";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    color: var(--text);
    transform: translate(-50%, -50%);
    font-family: "Kanit", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }

  transition: all 0.6s;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }

  ${(props) => {
    if (props.show) {
      return `
      width: 45px;
      height: 45px;
      top: 12%`;
    } else
      return `width: 40px;
    height: 40px;
    top: 20%;
    transform: rotate(-180deg);`;
  }}
`;

export const Aside = () => {
  const [selected, setSelected] = useState("home");
  const [show, setShow] = useState(true);
  const { isMobileDisplay } = useContext(PageContext);
  const { data: menuOptions } = useMenuOptions();

  const toggleAside = () => {
    setShow(!show);
  };

  return (
    <AsideContext.Provider value={{ showAside: show }}>
      <Layout show={show}>
        <Header>
          <HeaderBackground src={HeaderImage} alt="Aside header" show={show} />
          <HeaderInfo show={show}>
            <AsideAvatar imageWidth="small"></AsideAvatar>
            <HeaderInfoDesc show={show} isMobileDisplay={isMobileDisplay}>
              Sergio Rivera
            </HeaderInfoDesc>
          </HeaderInfo>
        </Header>
        <Content>
          <OptionsList>
            {menuOptions.map((el) => (
              <Option
                option={el}
                key={el.desc}
                setSelected={setSelected}
                selected={selected === el.icon ? true : false}
                isMobileDisplay={isMobileDisplay}
              ></Option>
            ))}
          </OptionsList>
        </Content>
        <ToggleButton onClick={toggleAside} show={show}></ToggleButton>
      </Layout>
    </AsideContext.Provider>
  );
};
