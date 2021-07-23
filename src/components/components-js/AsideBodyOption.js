import React from "react";

import "../components-css/AsideBodyOption.css";

const AsideBodyOptn = (props) => {
  const { icon, text, active, jumpLocation, handleClickCallback } = props;
  //const isSelected = active ? "selected" : "";

  return (
    <li
      className="asideBody__option"
      onClick={(e) => handleClickCallback(e, props)}
      href={"#" + jumpLocation}
    >
      <span className={active}></span>
      <i className={icon} />
      <p>{text}</p>
    </li>
  );
};

export default AsideBodyOptn;
