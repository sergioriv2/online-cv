import React from "react";
import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import HobbiesSection from "./HobbiesSection";

import "./css/PrincipalPage.css";

const Content = () => {
  return (
    <div className="principalPage-content">
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <EducationSection></EducationSection>
      <HobbiesSection></HobbiesSection>
    </div>
  );
};

export default Content;
