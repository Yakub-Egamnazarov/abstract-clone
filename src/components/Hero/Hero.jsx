import React from "react";
import { Link } from "react-router-dom";

// Importing svg component and image assets
import { ReactComponent as ArrowSvg } from "../../assets/images/arrow-up-left.svg";
import { ReactComponent as LogoWayfair } from "../../assets/images/logo-wayfair.svg";
import { ReactComponent as LogoCisco } from "../../assets/images/logo-cisco.svg";
import { ReactComponent as LogoDocuSign } from "../../assets/images/logo-docusign.svg";
import { ReactComponent as LogoMicrosoft } from "../../assets/images/logo-microsoft.svg";
import { ReactComponent as LogoZendesk } from "../../assets/images/logo-zendesk.svg";
import heroIllustration from "../../assets/images/Branches_Hero2022.png";

// importing styles
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <div className="Hero__title">
          <h1 className="text--title">
            <span className="text--gtsuper">True Version control </span>
            for Sketch files
          </h1>
          <div className="Hero__annotation">
            <ArrowSvg />
            <h2 className="text--annotation">
              Free yourself from files and folders
            </h2>
          </div>
        </div>
        <div className="Hero__buttons">
          <Link to="/" className="button button--main">
            Start Trial
          </Link>
          <Link to="/" className="button button--ghost">
            Download
          </Link>
        </div>

        <div className="Hero__information">
          <p className="text--main">
            1 in 3 Fortune companies use Sketch + Abstrack
          </p>
        </div>

        <div className="Hero__brands">
          <div className="Hero__brands--logo">
            <LogoWayfair />
          </div>
          <div className="Hero__brands--logo">
            <LogoCisco />
          </div>
          <div className="Hero__brands--logo">
            <LogoDocuSign />
          </div>
          <div className="Hero__brands--logo">
            <LogoMicrosoft />
          </div>
          <div className="Hero__brands--logo">
            <LogoZendesk />
          </div>
        </div>
      </div>
      <div className="Hero__illustration">
        <img
          src={heroIllustration}
          alt="Side panel view of Branches in Versions"
        />
      </div>
    </div>
  );
};

export default Hero;

// Hero Structure Tree
// div Hero
//  | div Hero__content
//  | | div Hero__title
//  | | | H1 text-title
//  | | | div Hero__annotion
//  | | | | svg annotation-arrow
//  | | | | h2 text-annotation
//  | | div Hero__buttons
//  | | | a button-main
//  | | | a button-ghost
//  | | div Hero__information
//  | | | p text-main
//  | | div Hero__brands
//  | | | div Hero__brands--logo
//  | | |  | svg
//  | | | div Hero__brands--logo
//  | | |  | svg
//  | | | div Hero__brands--logo
//  | | |  | svg
//  | | | div Hero__brands--logo
//  | | |  | svg
//  | | | div Hero__brands--logo
//  | | |  | svg
//  | div Hero__illustration (absolute)
//  | | img Hero__illustration-img
//
//
