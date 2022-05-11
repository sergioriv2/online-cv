import { useCallback, useContext } from "react";
import { AsideContext } from "../../context/asideContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const Layout = styled.li`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Span = styled.span`
  height: 100%;
  width: ${(props) => (props.selected ? "5px;" : "0px")};
  background-color: var(--primary);
  transition: all 0.2s;
`;

const OptionDesc = styled.div`
  width: 85%;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s;
  white-space: nowrap;
  ${(props) => (props.isMobileDisplay ? "opacity: 0;" : "opacity: 1;")};
  & > p {
    ${(props) => (props.show ? "display: block;" : "display: none;")};
    color: ${(props) => (props.selected ? "var(--text);" : "var(--subtext);")};
  }

  & > svg {
    ${(props) => (props.show ? "display: none;" : "display: block;")};
    width: 25px;
    height: 25px;
    margin-left: 25%;
    color: ${(props) => (props.selected ? "var(--text);" : "var(--subtext);")};
  }
`;

export const Option = (props) => {
  const { option, selected, setSelected, isMobileDisplay } = props;
  const { desc, goTo, icon } = option;
  const { showAside } = useContext(AsideContext);

  const handleClick = useCallback(() => {
    setSelected(icon);
    window.document.location = `#${goTo}`;
  }, [icon, setSelected, goTo]);

  return (
    <Layout onClick={handleClick}>
      <Span selected={selected} />
      <OptionDesc
        show={showAside}
        selected={selected}
        isMobileDisplay={isMobileDisplay}
      >
        <p>{desc}</p>
        <FontAwesomeIcon icon={icon} />
      </OptionDesc>
    </Layout>
  );
};
