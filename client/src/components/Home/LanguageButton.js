import { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "../../context/pageContext";

const Layout = styled.div``;

const Select = styled.select`
  width: 70px;
  background-color: var(--background-1);
  padding: 5px 10px;
  font-family: "Open Sans", sans-serif;
  color: var(--text);
  outline: none;
`;

const Option = styled.option``;

const LanguageButton = () => {
  const { language, setLanguage } = useContext(PageContext);

  return (
    <Layout>
      <Select
        id="language"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <Option>es</Option>
        <Option>en</Option>
      </Select>
    </Layout>
  );
};

export default LanguageButton;
