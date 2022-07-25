import styled from "styled-components";
import { useContext } from "react";
import { PageContext } from "../../context/pageContext";
import useMenuOptions from "../../hooks/useMenuOptions";

const Layout = styled.header`
  background-color: var(--primary);
  width: 100%;
  position: fixed;
  top: 0;

  z-index: 100;
  transition: all 0.4s;
  ${(props) => {
    if (props.isMobileDisplay) {
      return "height: 120px;";
    } else return "height: 0;";
  }};
`;

const Container = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-direction: column;

  & > h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
  }

  & > nav {
    width: 80%;
  }

  & > nav > ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  ${(props) => (props.isMobileDisplay ? "display: flex;" : "display: none;")};
`;

const NavOption = styled.a`
  font-family: "Open sans", "sans-serif";
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: var(--background-1);
  text-decoration: none;
`;

export const Header = () => {
  const { data: options } = useMenuOptions();
  const { isMobileDisplay } = useContext(PageContext);

  return (
    <Layout isMobileDisplay={isMobileDisplay}>
      <Container isMobileDisplay={isMobileDisplay}>
        <h2>Sergio Rivera</h2>
        <nav>
          <ul>
            {options.map((el, i) => (
              <li key={i}>
                <NavOption href={"#" + el.goTo}>{el.desc}</NavOption>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Layout>
  );
};
