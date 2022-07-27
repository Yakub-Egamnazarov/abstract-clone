import React from "react";
import { Link } from "react-router-dom";

import "./SectionThree.scss";

// Importing Link Component
import LinkRow from "./LinkRow";

// Importing svg logos
import { ReactComponent as Cisco } from "../../assets/images/logo-cisco-black.svg";
import { ReactComponent as SFSVG } from "../../assets/images/logo-sf-black.svg";
import { ReactComponent as BHSVG } from "../../assets/images/logo-bh-black.svg";

// TODO HOW to send SVG react component as a props

const storyContent = [
  {
    companyName: "Cisco",
    companyLogo: Cisco,
    companyID: "001",
    heading: "Design system management",
    desc: "How Cisco built an enterprise global design system",
    storyURL: "/",
  },

  {
    companyName: "Saleforce",
    companyLogo: SFSVG,
    companyID: "002",
    heading: "Radical transparency",
    desc: "How designers at Salesforce fostered trust and teamwork",
    storyURL: "/",
  },

  {
    companyName: "Banner Health",
    companyLogo: BHSVG,
    companyID: "003",
    heading: "Remote collaboration",
    desc: "How Banner Health is navigating the remote future no one planned for",
    storyURL: "/",
  },
];

const SectionThree = () => {
  return (
    <div className="container-max">
      <div className="flex-grid">
        {storyContent.map((company) => (
          <div className="col col-12-d col-4-ds" key={`${company.companyID}`}>
            <Link
              to={`${company.storyURL}`}
              className="versions-design-team w-inline-block"
            >
              <LinkRow
                name={company.companyName}
                heading={company.heading}
                desc={company.desc}
                Icon={company.companyLogo}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
