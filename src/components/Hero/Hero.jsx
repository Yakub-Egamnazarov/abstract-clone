import React from "react";
import { Link } from "react-router-dom";

// Importing svg component
import { ReactComponent as ArrowSvg } from "../../assets/images/arrow-up-left.svg";
import { ReactComponent as LogoWayfair } from "../../assets/images/logo-wayfair.svg";
import { ReactComponent as LogoCisco } from "../../assets/images/logo-cisco.svg";
import { ReactComponent as LogoDocuSign } from "../../assets/images/logo-docusign.svg";
import { ReactComponent as LogoMicrosoft } from "../../assets/images/logo-microsoft.svg";
import { ReactComponent as LogoZendesk } from "../../assets/images/logo-zendesk.svg";
import heroIllustration from "../../assets/images/Branches_Hero2022.png";

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
          <div className="Hero__content-down text-1">
            1 in 3 Fortune 500 companies use Sketch + Abstract
          </div>
          <div className="Hero__img-wrapper">
            <div className="Hero__img-logo">
              <LogoWayfair />
            </div>
            <div className="Hero__img-logo">
              <LogoCisco />
            </div>
            <div className="Hero__img-logo">
              <LogoDocuSign />
            </div>
            <div className="Hero__img-logo">
              <LogoMicrosoft />
            </div>
            <div className="Hero__img-logo">
              <LogoZendesk />
            </div>
          </div>
        </div>
      </div>
      <div className="Hero__illustration-wrapper">
        <div className="Hero__illustration">
          <img
            src={heroIllustration}
            alt="Side panel view of Branches in Versions"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
