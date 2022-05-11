import React from "react";

export const PageContext = React.createContext({
  isMobileDisplay: true,
  language: "es",
  setLanguage: () => {},
});
