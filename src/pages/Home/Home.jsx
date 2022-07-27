import React from "react";

// Importing Components for the Main page
import Hero from "../../components/Hero/Hero";
import HeadingSFirst from "../../components/HeadingSFirst/HeadingSFirst";
import HeadingSSecong from "../../components/HeadingSSecond/HeadingSSecond";

import SectionTwo from "../../components/SectionTwo/SectionTwo";

// Importing SASS component styles
import "../../components/SASS-components/buttons.scss";
import "../../components/SASS-components/typography.scss";
import "../../components/SASS-components/utilities.scss";
import "../../components/SASS-components/containers.scss";

// importing style for Home pages
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="section s-hero s-hero-versions ">
        <Hero />
        <div className="section--radius"></div>
      </section>
      <HeadingSFirst />
      <section className="section s-radius sr-large bg-blurple z-9">
        <SectionTwo />
      </section>
      <HeadingSSecong />
      <section></section>
    </div>
  );
};

export default Home;
