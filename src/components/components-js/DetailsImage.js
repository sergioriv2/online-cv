import React from "react";

const DetailsImage = (props) => {
  const { url, alt } = props;

  return <img src={url} alt={alt} className="DetailsImage"></img>;
};

export default DetailsImage;
