import React from "react";
import "../components-css/LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className="LoadingSpinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingSpinner;
