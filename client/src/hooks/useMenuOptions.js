import options from "../assets/home-content.json";
import { PageContext } from "../context/pageContext";
import { useContext, useState, useEffect } from "react";

const useMenuOptions = () => {
  const { language } = useContext(PageContext);

  const [data, setData] = useState(options.lang[language].page.home.asideMenu);

  useEffect(() => {
    setData(options.lang[language].page.home.asideMenu);
  }, [data, language]);

  return { data };
};

export default useMenuOptions;
