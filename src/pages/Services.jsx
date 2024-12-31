import React from "react";
import ContentServices from "../components/ContentServices";
import ContentContact from "../components/ContentContact";
import ContentPortfolio from "../components/ContentPortfolio";
import ContentBrands from "../components/ContentBrands";

const Services = () => {
  return (
    <>
      <div className="space-navbar-pages"></div>
      <ContentServices />
      <ContentBrands />
      <ContentPortfolio />
      <ContentContact />
    </>
  );
};

export default Services;
