import React from "react";
import ContentAbout from "../components/ContentAbout";
import ContentServices from "../components/ContentServices";
import ContentContact from "../components/ContentContact";

const About = () => {
  return (
    <>
      <div className="space-navbar-pages"></div>
      <ContentAbout />
      <ContentServices />
      <ContentContact />
    </>
  );
};

export default About;
