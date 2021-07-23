import React, { useEffect, useRef, useState } from "react";
import fontAwesome from "../../resources/font-awesome.json";
import AsideBodyOptn from "./AsideBodyOption";

const AsideList = () => {
  // SET DATA

  const [buttons, setButtons] = useState([]);

  const [indexActive, setIndexActive] = useState("aside-option1");

  const isFirstRender = useRef(true);

  const firstRender_LoadJson = () => {
    const btns = fontAwesome.aside.map((data) => {
      return data;
    });
    setButtons(btns);
  };

  // UPDATE BUTTON STATE

  const scrollToSection = (event) => {
    const object = event.currentTarget.getAttribute("href");
    window.location.hash = object;
  };

  const handleClickList = (event, props) => {
    setIndexActive(props.id);
    scrollToSection(event);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      firstRender_LoadJson();
      return;
    }
  }, []);

  useEffect(() => {}, [indexActive]);

  return (
    <ul className="asideBody__buttonsList">
      {buttons.map(({ name, iconClass, internalId, jumpTo }) => (
        <AsideBodyOptn
          key={internalId}
          id={internalId}
          active={internalId === indexActive ? "selected" : ""}
          text={name}
          icon={iconClass}
          jumpLocation={jumpTo}
          handleClickCallback={handleClickList}
        ></AsideBodyOptn>
      ))}
    </ul>
  );
};

export default AsideList;
