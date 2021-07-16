import React from "react";

const Section = (props) => {
  const { title, text } = props;

  return (
    <section class="section-component">
      <div class="section-component__wrapper">
        <div className="section-component__title">
          <h1>{title}</h1>
          <hr></hr>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
