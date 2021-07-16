import React from "react";
import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import ProyectsSection from "./ProyectsSection";
import EducationSection from "./EducationSection";
import HobbiesSection from "./HobbiesSection";

import "../../components/components-css/PrincipalPage.css";

const Content = () => {
  return (
    <div className="principalPage-content">
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <ProyectsSection></ProyectsSection>
      <EducationSection></EducationSection>
      <HobbiesSection></HobbiesSection>
    </div>
  );
};

export default Content;
