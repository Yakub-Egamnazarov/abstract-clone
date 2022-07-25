import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <div className="Hero__content-wrapper">
          <div className="text-container">
            <div className="Hero__title-wrapper">
              <h1 className="Hero-heading">
                <span>True Version control</span> for Sketch files
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="Hero__img"></div>
    </div>
  );
};

export default Hero;
