import React from "react";

import "./HeadingSFirst.scss";

const HeadingSFirst = () => {
  return (
    <div className="section-two bg-blurple">
      <div className="section-two__bg-extension bg-blurple"></div>
      <div className="continer-max">
        <div className="flex-grid">
          <div className="col-wrapper">
            <div className="col col-12-d">
              <div className="heading-lines">
                <div className="heading-line hl-first"></div>
                <div className="heading-line"></div>
              </div>
              <div className="flex-grid">
                <div className="col-wrapper">
                  <div className="col col-8-d col-9-dmax">
                    <h2 className="text--heading-xl">
                      <span className="text--gtsuper">
                        Design collaboration{" "}
                      </span>
                      shouldn't be extra work
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSFirst;
