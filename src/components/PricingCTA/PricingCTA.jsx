import React from "react";
import { Link } from "react-router-dom";

import "./PricingCTA.scss";

const PricingCTA = () => {
  return (
    <div className="pricing-cta-container section wf-section">
      <h3 className="pricing-cta-heading text-heading-l">
        Level up your
        <span className="text--gtsuper"> workflow</span>
      </h3>
      <Link to="/" className="button button--main">
        View Pricing Plans
      </Link>
    </div>
  );
};

export default PricingCTA;
