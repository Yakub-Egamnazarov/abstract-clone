import React from "react";
import { Link } from "react-router-dom";

import "./SectionThree.scss";

// Importing Link Component
import LinkRow from "./LinkRow";

// Importing svg logos
import { ReactComponent as Cisco } from "../../assets/images/logo-cisco-black.svg";

// TODO HOW to send SVG react component as a props

const storyContent = {
  cisco: {
    img: Cisco,
    heading: "Design system management",
    desc: "How Cisco built an enterprise global design system",
    name: "Cisco",
  },
  sf: {
    img: "../../assets/images/logo-sf-black.svg",
    heading: "Radical transparency",
    desc: "How designers at Salesforce fostered trust and teamwork",
    name: "Saleforce",
  },
  bh: {
    img: "../../assets/images/logo-bh-black.svg",
    heading: "Remote collaboration",
    desc: "How Banner Health is navigating the remote future no one planned for",
    name: "Banner Health",
  },
};

const SectionThree = () => {
  return (
    <div className="container-max">
      <div className="flex-grid">
        <div className="col col-12-d col-4-ds">
          <Link to="/" className="versions-design-team w-inline-block">
            <LinkRow
              name={storyContent.cisco.name}
              heading={storyContent.cisco.heading}
              desc={storyContent.cisco.desc}
              Icon={storyContent.cisco.img}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
