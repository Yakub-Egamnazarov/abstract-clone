import React from "react";

// Importing Components for the Main page
import Hero from "../../components/Hero/Hero";
import HeadingS from "../..//components/HeadingS/HeadingS";

// Importing SASS component styles
import "../../components/SASS-components/buttons.scss";
import "../../components/SASS-components/typography.scss";
import "../../components/SASS-components/utilities.scss";
import "../../components/SASS-components/col-grids.scss";

// importing style for Home pages
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="section s-hero s-hero-versions ">
        <Hero />
        <div className="section--radius"></div>
      </section>
      <HeadingS />
      <section className="section section-two s-radius sr-large bg-blurple z-9">
        Section
      </section>
      <section className="section section-two s-radius sr-large bg-blurple z-9">
        Section
      </section>
      <div className="section-s-heading-first background-kelp z-8">DIV</div>
      <section className="section s-radius sr-medium background-kelp z-8">
        Section
      </section>
      <div className="section s-heading background-white z-7">DIV</div>
      <section className="s-radius sr-large s-last background-white">
        Sectin
      </section>
      <div className="c-section c-section-contentcts wf-section">DIV</div>
      <div className="versions-cta-container section wf-section">DIV</div>
    </div>
  );
};

export default Home;
