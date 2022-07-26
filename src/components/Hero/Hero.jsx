import React from "react";
import { Link } from "react-router-dom";

// Importing svg component
import { ReactComponent as ArrowSvg } from "../../assets/images/arrow-up-left.svg";

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
              <div className="Hero__buttons">
                <Link to="/start-branches-trial" className="button">
                  Start Trial{" "}
                </Link>
                <Link
                  to="/download"
                  className="button button-ghost button-ghost-reverse"
                >
                  Download
                </Link>
              </div>
              <div className="Hero__annotation">
                <div className="Hero__annotation-arrow">
                  <ArrowSvg />
                </div>
                <div className="text-annotation">
                  Free yourself from files and folders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Hero__img"></div>
    </div>
  );
};

export default Hero;
