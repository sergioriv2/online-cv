import React, { useEffect, useRef, useState } from "react";
import fontAwesome from "../../resources/font-awesome.json";
import AsideBodyOptn from "./AsideBodyOption";

const AsideListOfOptions = () => {
  const [buttons, setButtons] = useState([]);
  const isFirstRender = useRef(true);

  const firstRender_LoadJson = () => {
    const btns = fontAwesome.aside.map((data) => {
      return data;
    });
    setButtons(btns);
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      firstRender_LoadJson();
      return;
    }
  }, []);

  return (
    <ul className="asideBody__buttonssList">
      {buttons.map(({ name, iconClass, internalId, active }) => (
        <AsideBodyOptn
          key={internalId}
          text={name}
          icon={iconClass}
          internalId={internalId}
          isActive={active}
        ></AsideBodyOptn>
      ))}
    </ul>
  );
};

export default AsideListOfOptions;
