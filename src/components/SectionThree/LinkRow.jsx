import React from "react";

const LinkRow = ({ name, heading, desc, Icon }) => {
  return (
    <div className="flex-grid">
      <div className="col-wrapper space-0">
        <div className="col space-inner-0 col-2-d col-12-ds col-12-ml">
          <div className="versions-design-team-block vdtb-logo">
            <div className="versions-design-team-logo vdtl-1">
              <Icon />
            </div>
          </div>
        </div>
        <div className="col space-inner-0 col-3-d col-6-ds col-6-ml">
          <div className="versions-design-team-block vdbt-feature">
            <h3 className="heading-s versions-design-team-heading">
              {heading}
            </h3>
          </div>
        </div>
        <div className="col space-inner-0 col-5-d col-6-ds col-6-ml">
          <div className="versions-design-team-block">
            <div className="branches-grid-card-desc">{desc}</div>
          </div>
        </div>
        <div className="col space-inner-0 col-2-d col-12-ds col-12-ml">
          <div className="versions-design-team-block">
            <div className="text-link tl-alt">{`Read ${name}'s Story`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkRow;
