import React from "react";
import AsideHeader from "./AsideHeader";
import AsideBody from "./AsideBody";

import "../components-css/Aside.css";

const Aside = () => {
  return (
    <aside className="aside-component">
      <AsideHeader></AsideHeader>
      <AsideBody></AsideBody>
    </aside>
  );
};

export default Aside;
