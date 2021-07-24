import React from "react";

import "./css/PrincipalPage.css";
import "./css/HobbiesSection.css";

const HobbiesSection = () => {
  return (
    <section className="section-component">
      <div className="section-component__content">
        <h1 id="hobbies">Hobbies</h1>
        <hr></hr>
        <div className="hobbies">
          <div className="hobby-info">
            <i className="fas fa-gamepad"></i>
            <p>Gaming</p>
          </div>
          <div className="hobby-info">
            <i className="fas fa-photo-video"></i>
            <p>Ver series</p>
          </div>
          <div className="hobby-info">
            <i className="fas fa-music"></i>
            <p>Escuchar música</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
