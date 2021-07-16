import React from "react";

import "../components-css/AsideBodyOption.css";

const AsideBodyOptn = (props) => {
  const { icon, text } = props;
  //const isSelected = active ? "selected" : "";

  return (
    <li className="asideBody__option">
      <span></span>
      <i className={icon} />
      <p>{text}</p>
    </li>
  );
};

export default AsideBodyOptn;
