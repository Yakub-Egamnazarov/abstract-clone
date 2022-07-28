import React from "react";
import { Link } from "react-router-dom";

// Importing card component
import CtaCard from "./CTAcard";

// Importing assets
import cardOneImg from "../../assets/images/UseCases_Present_Header.svg";
import cardTwoImg from "../../assets/images/how-we-use-notebooks-p-800.jpeg";
import cardThreeImg from "../../assets/images/og-blog-p-500.png";

import "./CSection.scss";

const ctaContent = {
  heading: "Dedicated to ",
  headingSpan: "product designers",
  desc: "Get inspired by stories and resources from the best product design leaders and teams.",
  cardContent: [
    {
      imgObj: cardOneImg,
      imgAlt:
        "An illustration with a film projector that is projecting designs along with a teeter-totter and Newtons Cradle",
      cardHeading: "Customer Spotlight",
      cardDesc:
        "Empowering design teams and transforming workflows with Abstract ",
      linkText: "Read their stories",
      keyId: "001",
    },
    {
      imgObj: cardTwoImg,
      imgAlt: "Illustration with abstract logo pencil and Newtons Cradle",
      cardHeading: "Design Inspiration",
      cardDesc: "Scaling design ops, collaboration, and the impact of design ",
      linkText: "Get inspired",
      keyId: "002",
    },
    {
      imgObj: cardThreeImg,
      imgAlt: "",
      cardHeading: "Our Blog",
      cardDesc: "Stories, news, and tips from behind the Artboards",
      linkText: "Browse Abstract's blog",
      keyId: "003",
    },
  ],
};

const SectionC = () => {
  return (
    <div className="c-section c-section-content wf-section">
      <div className="c-grid c-grid_contentcta">
        <h4 className="c-contentcta_title">
          {ctaContent.heading}
          <span className="c-text-serif">{ctaContent.headingSpan}</span>
        </h4>
        <p className="c-contentcta_desc">{ctaContent.desc}</p>
        {ctaContent.cardContent.map((card) => (
          <CtaCard
            imgObj={card.imgObj}
            imgAlt={card.imgAlt}
            cardHeading={card.cardHeading}
            cardDesc={card.cardDesc}
            linkText={card.linkText}
            key={card.keyId}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionC;
