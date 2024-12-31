import React from "react";
import ContentHome from "../components/ContentHome";
import ContentAbout from "../components/ContentAbout";
import ContentServices from "../components/ContentServices";
import ContentContact from "../components/ContentContact";
import ContentPortfolio from "../components/ContentPortfolio";
import ContentBrands from "../components/ContentBrands";

const Home = () => {
  return (
    <>
      <ContentHome />
      <ContentAbout />
      <ContentServices />
      <ContentBrands />
      <ContentPortfolio />
      <ContentContact />
    </>
  );
};

export default Home;
