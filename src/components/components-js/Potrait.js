import React, { useState } from "react";
import "../components-css/Potrait.css";

const Potrait = (props) => {
  const { potraitSize } = props;

  const [size] = useState(potraitSize);

  const className =
    size === undefined
      ? "potrait-component__img medium"
      : `potrait-component__img ${size}`;

  return (
    <div className="potrait-component">
      <img className={className} src={props.src} alt="myself"></img>
    </div>
  );
};

export default Potrait;
