import React from "react";

// importing assets
import { ReactComponent as IconClockSvg } from "../../assets/images/ico-clock.svg";
import { ReactComponent as IconPlantSvg } from "../../assets/images/ico-plant.svg";
import { ReactComponent as IconSyncSvg } from "../../assets/images/ico-sync.svg";

import "./SectionTwo.scss";

const SectionTwo = () => {
  return (
    <div className="container-max">
      <div className="flex-grid">
        <div className="col-wrapper">
          <div className="col col-4-d col-12-ml">
            <div className="ico-illustration space-bottom-s">
              <IconClockSvg />
            </div>
            <h3 className="text-heading-s space-bottom-s">
              Less file. More flow.
            </h3>
            <div className="text-main space-bottom-s">
              No more digging through Dropbox and Google Drive. Always know
              where to find “the latest,” so you can stay in your design flow.
            </div>
          </div>
          <div className="col col-4-d col-12-ml">
            <div className="ico-illustration space-bottom-s">
              <IconPlantSvg />
            </div>
            <h3 className="text-heading-s space-bottom-s">
              Design together, in real time.
            </h3>
            <div className="text-main space-bottom-s">
              Explore and iterate in the same file at the same time, without
              losing the original. Simply create a branch, do your thing, then
              merge your changes when ready.
            </div>
          </div>
          <div className="col col-4-d col-12-ml">
            <div className="ico-illustration space-bottom-s">
              <IconSyncSvg />
            </div>
            <h3 className="text-heading-s space-bottom-s">
              Iterate with context.
            </h3>
            <div className="text-main space-bottom-s">
              Know who made changes, when, and why. Compare changes side by
              side, resolve design conflicts, and merge work with precision.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
