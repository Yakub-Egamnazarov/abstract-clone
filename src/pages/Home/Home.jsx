import React from "react";

// Importing Components for the Main page
import Hero from "../../components/Hero/Hero";
import HeadingSFirst from "../../components/HeadingSFirst/HeadingSFirst";
import HeadingSSecond from "../../components/HeadingSSecond/HeadingSSecond";
import CSection from "../../components/CSection/CSection";
import PricingCTA from "../../components/PricingCTA/PricingCTA";
import Footer from "../../components/Footer/Footer";

import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";

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
      <HeadingSSecond />
      <section className="section s-radius sr-large s-last bg-white">
        <SectionThree />
      </section>
      <CSection />
      <PricingCTA />
    </div>
  );
};

export default Home;
